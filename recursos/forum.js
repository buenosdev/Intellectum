// Função para adicionar um novo comentário
function addComment() {
    const nameInput = document.getElementById('comment-name');
    const contentInput = document.getElementById('comment-content');
    const imageInput = document.getElementById('comment-image');
  
    const name = nameInput.value;
    const content = contentInput.value;
    const image = imageInput.files[0];
  
    if (name.trim() === '' || content.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    const commentId = 'comment-' + (document.querySelectorAll('.comment').length + 1);
  
    const commentTemplate = `
      <div id="${commentId}" class="comment">
        <div class="comment-header">
          <img src="./images/avatar.png" alt="User Avatar">
          <div class="comment-info">
            <h3>${name}</h3>
            <p>${getCurrentDate()}</p>
          </div>
        </div>
        <div class="comment-content">
          <p>${content}</p>
          ${content.length > 50 ? '<button class="btn-read-more">Ler mais</button>' : ''}
        </div>
        ${image ? `<img src="${URL.createObjectURL(image)}" alt="Comment Image" style="max-width: 200px; height: auto;">` : ''}
      </div>
    `;
  
    const commentsContainer = document.querySelector('.comments');
    commentsContainer.innerHTML += commentTemplate;
  
    nameInput.value = '';
    contentInput.value = '';
    imageInput.value = '';
  
    // Verifica se o comentário precisa de botão "Ler mais"
    if (content.length > 50) {
      const commentContainer = document.getElementById(commentId);
      const readMoreButton = commentContainer.querySelector('.btn-read-more');
  
      readMoreButton.addEventListener('click', function() {
        commentContainer.classList.toggle('comment-expanded');
        readMoreButton.textContent = commentContainer.classList.contains('comment-expanded') ? '' : 'Ler mais';
      });
    }
  }
  
  // Função para obter a data atual
  function getCurrentDate() {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
  }
  
  // Adiciona o evento de envio do formulário
  const commentForm = document.getElementById('comment-form');
  commentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    addComment();
  });
  



