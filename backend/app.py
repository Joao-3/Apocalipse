from flask import Flask , request, jsonify
from flask_cors import CORS
import bcrypt
from pathlib import Path

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173", "http://127.0.0.1:5173"])
USERS_FILE = Path(__file__).with_name("usuarios.txt")

@app.route("/")
def inicio():
    return "Backend da A3 funcionando!"

@app.route("/login", methods=["POST"])
def login():
    email = request.form.get("email", "").strip()
    senha = request.form.get("senha", "")
    if not email or not senha: # 
        return jsonify({"mensagem": "E-mail e senha são obrigatórios."}), 400

    if USERS_FILE.exists():
        with USERS_FILE.open('r', encoding='utf-8') as arquivo:
            for linha in arquivo:
                if ';' not in linha:
                    continue
                email_salvo, senha_hash = linha.strip().split(';', 1)

                if email == email_salvo:
                    if bcrypt.checkpw(senha.encode('utf-8'), senha_hash.encode('utf-8')):
                        return jsonify({"mensagem": "Login realizado!", "email": email})

                    return jsonify({"mensagem": "Senha incorreta!"}), 401

    return jsonify({"mensagem": "Usuário não encontrado!"}), 404

@app.route("/cadastro", methods=["POST"])

def cadastro():
    email = request.form.get("email", "").strip()
    senha = request.form.get("senha", "")
    if not email or not senha: # 
        return jsonify({"mensagem": "E-mail e senha são obrigatórios."}), 400

    if USERS_FILE.exists():
        with USERS_FILE.open('r', encoding='utf-8') as arquivo:
            for linha in arquivo:
                if linha.split(';', 1)[0] == email:
                    return jsonify({"mensagem": "Este e-mail já está cadastrado."}), 409

    senha_hash = bcrypt.hashpw(senha.encode('utf-8'), bcrypt.gensalt())
    with USERS_FILE.open('a', encoding='utf-8') as arquivo:
        arquivo.write(f"{email};{senha_hash.decode('utf-8')}\n")
    return jsonify({"mensagem": "Cadastro realizado!", "email": email})

if __name__ == "__main__":
    app.run(debug=True)