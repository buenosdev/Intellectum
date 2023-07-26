// Obtém o elemento do modal
var modal = document.getElementById("loginModal");

// Obtém o botão que abre o modal
var button = document.getElementById("comecarAgoraButton");

// Obtém o elemento de fechar (X) do modal
var closeBtn = document.getElementsByClassName("close")[0];

// Função para abrir o modal
button.onclick = function() {
  modal.style.display = "block";
}

// Função para fechar o modal quando clicar no botão (X)
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Função para fechar o modal quando clicar fora dele
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
