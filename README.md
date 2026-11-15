Precisa de Python e Node.js.\

cd backend\
python3 -m venv .venv\
source .venv/bin/activate\
pip install -r requirements.txt\
python app.py\

cd backend && python3 -m venv .venv && source .venv/bin/activate && pip install -r requirements.txt && python app.py

Em outro terminal:\

cd test\
npm install\
npm run dev\

O Vite encaminha `/cadastro` e `/login` para o backend em `127.0.0.1:5000`.
Se o Vite já estava aberto antes da criação dessa configuração, pare-o e execute `npm run dev` novamente para carregar o proxy.

abra qualquer Ports que é direcionado
