/*INPUT DE MENSAGEM*/

function sendMessage() {
    var message = document.getElementById('messageInput').value;
    var chatArea = document.getElementById('chatArea');
    var messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    chatArea.appendChild(messageDiv);
    document.getElementById('messageInput').value = '';
}

// Pop up status personalizado
function toggleStatusPopup() {
    var popup = document.getElementById('statusPopup');
    popup.style.display = 'block';
  
    // Adiciona um ouvinte de evento ao pop-up para fechar quando clicado fora do conteúdo
    popup.addEventListener('click', function(e) {
      var content = document.getElementById('statusPopupContent');
      // Se o clique não foi dentro do conteúdo, feche o pop-up
      if (e.target !== content && !content.contains(e.target)) {
        closeStatusPopup();
      }
    });
  }
  
  function closeStatusPopup() {
    var popup = document.getElementById('statusPopup');
    popup.style.display = 'none';
  }
  
  function saveStatus() {
    var status = document.getElementById('customStatus').value;
    // Faça algo com o status personalizado aqui, como salvar em um cookie, local storage ou enviar para o servidor
    closeStatusPopup();
  }
  
// Resto do seu código JavaScript


/* ÁREA PARA ALTERNAR ENTRE MENSAGENS E SERVIDORES */

function showMessageArea() {
    document.getElementById('friendsArea').style.display = 'none';
    document.getElementById('messagesArea').style.display = 'block';
}

function showFriendsArea() {
    document.getElementById('messagesArea').style.display = 'none';
    document.getElementById('friendsArea').style.display = 'block';
}

/* Script para controlar o menu suspenso: */

function toggleMenu(event) {
    var menu = document.querySelector(".server-menu .menu");
    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
    event.stopPropagation(); // Isso evita que o evento seja propagado para o documento
}

/* ouvinte de eventos ao documento para detectar cliques fora do menu */

document.addEventListener('click', function(event) {
    var menu = document.querySelector(".server-menu .menu");
    if (event.target !== menu && !menu.contains(event.target)) {
        menu.style.display = 'none';
    }
});

/* Detalhes do usuario */

document.addEventListener('click', function(e) {
    var userMenu = document.getElementById('userMenu');
    var userDetails = document.querySelector('.user-details');
    if (!userDetails.contains(e.target)) {
        userMenu.style.display = 'none';
    }
});

function toggleUserMenu() {
    var userMenu = document.getElementById('userMenu');
    userMenu.style.display = userMenu.style.display === 'none' || userMenu.style.display === '' ? 'block' : 'none';
}



/* mudar de tema*/

function changeTheme() {
    const theme = document.getElementById('themeSelector').value;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    applyTheme();
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark'; 
    document.getElementById('themeSelector').value = savedTheme;
    document.documentElement.setAttribute('data-theme', savedTheme);
    applyTheme();
}

function applyTheme() {
    const theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'light') {
        // Adicione o código para aplicar o tema claro
    } else {
        // Adicione o código para aplicar o tema escuro
    }
}

window.onload = loadTheme;

document.getElementById('themeSwitcher').addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});

/* interativo mensagens diretas e lista de amigos */
function showMessageArea() {
    toggleContentArea('messagesArea');
}
  
function showFriendsArea() {
    toggleContentArea('friendsArea');
}
  
function toggleContentArea(showId) {
    let contentDiv = document.querySelector('.content');
    let showArea = document.querySelector('#' + showId);
    let areas = document.querySelectorAll('.content > div');
    
    areas.forEach(area => {
      area.style.display = 'none';
      area.style.opacity = '0';
    });
    
    if (contentDiv.style.maxHeight === '300px' && showArea.classList.contains('active')) {
      contentDiv.style.maxHeight = '0';
      showArea.classList.remove('active');
    } else {
      contentDiv.style.maxHeight = '300px';
      showArea.style.display = 'block';
      showArea.classList.add('active');
      setTimeout(() => { showArea.style.opacity = '1'; }, 50);
    }
}


//SERVIDORES

// Função para extrair as iniciais do nome do servidor
function getInitials(name) {
    return name.split(' ').map(word => word[0].toUpperCase()).join('');
}

function submitServer() {
    var serverName = document.getElementById('serverNameInput').value;
    var serverImage = document.getElementById('serverImageInput').files[0];
    var reader = new FileReader();

    reader.onloadend = function() {
        var serverContainer = document.getElementById('serverContainer');
        var newServer = document.createElement('div');
        newServer.className = 'server';
        newServer.innerHTML = `<img src="${reader.result}" alt="${serverName}" /><div class="server-name-tooltip">${serverName}</div>`;
        serverContainer.appendChild(newServer);
    }

    if (serverImage) {
        reader.readAsDataURL(serverImage);
    } else {
        // Aqui, criamos um servidor mesmo sem uma imagem.
        var serverContainer = document.getElementById('serverContainer');
        var newServer = document.createElement('div');
        newServer.className = 'server';

        // Aqui, se nenhuma imagem é fornecida, exibimos a abreviação do nome do servidor.
        // Você pode modificar isso para mostrar uma imagem padrão se preferir.
        var serverAbbreviation = serverName.slice(0, 2).toUpperCase();
        newServer.innerHTML = `<div class="server-name">${serverAbbreviation}</div><div class="server-name-tooltip">${serverName}</div>`;
        serverContainer.appendChild(newServer);
    }

    // Fechar o popup
    closeServerPopup();
}

  

// Função para mostrar o pop-up do servidor
function showServerPopup() {
    var popup = document.getElementById('createServerPopup');
    popup.style.display = 'block';
}

// Função para fechar o pop-up do servidor
function closeServerPopup(e) {
    var popup = document.getElementById('createServerPopup');
    popup.style.display = 'none';
}


// Chame essa função ao clicar no botão 'Criar Servidor'
function createServer() {
    showServerPopup();
}


// Sair do pop ao clicar em algo na tela
function closeServerPopupOnOutsideClick(event) {
    var popupInner = document.querySelector('.popup-inner');
    if (event.target === event.currentTarget || !popupInner.contains(event.target)) {
        closeServerPopup();
    }
}








  