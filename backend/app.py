
from flask import Flask , request, jsonify
from flask_cors import CORS
import bcrypt
app = Flask(__name__)
CORS(app, origins=["http://localhost:5173", "http://127.0.0.1:5173"])
email=''
senha=''
salt = bcrypt.gensalt(8)
# joao eu odeio seu codigo cara tipo muito mesmo cara  nunca mais cria seu troço com site de trasformacanva em react cara
@app.route("/")
def inicio():
    return "Backend da A3 funcionando!"
@app.route("/login", methods=["POST"])
def login():
    dados = list(request.form.values())
    email = dados[0]
    senha = dados[1]

    with open('usuarios.txt', 'r', encoding='utf-8') as arquivo:
        for linha in arquivo:
            email_salvo, senha_hash = linha.strip().split(';', 1)

            if email == email_salvo:
                if bcrypt.checkpw(senha.encode('utf-8'), senha_hash.encode('utf-8')):
                    return jsonify({"mensagem": "Login realizado!", "email": email})

                return jsonify({"mensagem": "Senha incorreta!"}), 401

    return jsonify({"mensagem": "Usuário não encontrado!"}), 404
@app.route("/cadastro", methods=["POST"])

def cadastro():
    dados = list(request.form.values())
    email = dados[0]
    senha = dados[1]
    senha_hash = bcrypt.hashpw(senha.encode('utf-8'), bcrypt.gensalt(8))
    with open('usuarios.txt', 'a', encoding='utf-8') as arquivo:
        arquivo.write(f"{email};{senha_hash.decode('utf-8')}\n")
    return jsonify({"mensagem": "Cadastro realizado!", "email": email})
if __name__ == "__main__":
    app.run(debug=True)