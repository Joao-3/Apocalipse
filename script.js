function nav(pageId) {
  // escondendo páginas por remoção delas
  var pages = document.querySelectorAll('.page');
  for (var i = 0; i < pages.length; i++) {
    pages[i].classList.remove('active');
  }
  // página atual
  document.getElementById(pageId).classList.add('active');
}

const gradesEvasao = [
  "baixa", "nenhum", "media", "media", "media", "baixa",
  "media", "media", "media", "media", "media", "baixa",
  "media", "media", "media", "alta", "media", "alta",
  "baixa", "baixa", "alta", "alta", "alta", "baixa",
  "grave", "media", "alta", "alta", "alta", "alta"
];

const gradeEvasao = document.getElementById("evasion-grid");
gradesEvasao.forEach((atual) => {
  const celula = document.createElement("span"); // 36 <spans></spans>
  celula.textContent = atual;
  gradeEvasao.appendChild(celula);
});

const gradeHistorico = document.getElementById("history-grid");
for (let i = 0; i < 30; i++) {
  gradeHistorico.appendChild(document.createElement("div")); // 30 <div></div>
}

const API_BASE_URL = "http://127.0.0.1:5000";

async function enviarCredenciais(endpoint, email, senha) {
  const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ email, senha })
  });
  const resultado = await response.json();

  if (!response.ok) {
    throw new Error(resultado.mensagem || "Não foi possível concluir a solicitação.");
  }

  return resultado;
}

async function entrar() {
  const email = document.getElementById("login-email").value.trim();
  const senha = document.getElementById("login-senha").value;
  await enviarCredenciais("login", email, senha);
  nav("p3");
}

async function cadastrar() {
  const email = document.getElementById("cadastro-email").value.trim();
  const senha = document.getElementById("cadastro-senha").value;
  const confirmacao = document.getElementById("confirmar-senha").value;

  if (senha !== confirmacao) {
    alert("As senhas não coincidem.");
    return;
  }
}