No 1º terminal:
py -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r backend\requirements.txt
python backend\app.py

backend em: http://127.0.0.1:5000

No segundo terminal:
py -m http.server 5173

Abra: http://localhost:5173