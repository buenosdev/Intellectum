document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("aside.sidebar button");
    const sections = document.querySelectorAll("div.section");
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remove a classe 'active' de todos os botões e seções
        buttons.forEach((btn) => btn.classList.remove("active"));
        sections.forEach((section) => section.classList.remove("active"));
  
        // Adiciona a classe 'active' ao botão clicado
        button.classList.add("active");
  
        // Obtém o atributo 'data-section' do botão clicado
        const sectionId = button.getAttribute("data-section");
  
        // Encontra a seção correspondente e adiciona a classe 'active'
        const section = document.querySelector(`div.section[data-section="${sectionId}"]`);
        if (section) {
          section.classList.add("active");
        }
      });
    });
  });
  

/* MODO CLARO E ESCURO */

document.getElementById('theme').addEventListener('change', function() {
  const theme = this.value;
  document.documentElement.setAttribute('data-theme', theme);
});

document.getElementById('toggle-theme').addEventListener('click', function() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
});

// Função para mudar o tema
function changeTheme() {
  const theme = document.getElementById('theme').value;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

// Função para carregar o tema salvo
function loadTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark'; // Carrega o tema escuro como padrão se não houver tema salvo
  document.getElementById('theme').value = savedTheme;
  document.documentElement.setAttribute('data-theme', savedTheme);
}

// Chama a função de carregamento de tema ao abrir a página
window.onload = loadTheme;



/* --------------------- */



  document.addEventListener("DOMContentLoaded", () => {
    // Carregar as configurações
    loadSettings();

    // Adicionar manipuladores de eventos para salvar as configurações quando alteradas
    document.getElementById("theme").addEventListener("change", saveSettings);
    document.getElementById("font-size").addEventListener("change", saveSettings);
});

function loadSettings() {
    // Recuperar as configurações do armazenamento local
    const theme = localStorage.getItem("theme");
    const fontSize = localStorage.getItem("fontSize");

    // Aplicar as configurações na página
    if (theme) {
        document.body.classList.add(theme);
        document.getElementById("theme").value = theme;
    }
    if (fontSize) {
        document.body.style.fontSize = fontSize;
        document.getElementById("font-size").value = fontSize;
    }
}

function saveSettings() {
    // Salvar as configurações no armazenamento local
    localStorage.setItem("theme", document.getElementById("theme").value);
    localStorage.setItem("fontSize", document.getElementById("font-size").value);
    // Atualizar a página para refletir as novas configurações
    loadSettings();
}


/* fechar */

function redirectToChat() {
  window.location.href = '../chat.html';
}
