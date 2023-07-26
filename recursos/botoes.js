const likeBtn = document.querySelector('.love-it-btn');
const likeCount = document.querySelector('#likeCount');

let isLiked = false;
let count = 0;

likeBtn.addEventListener('click', function() {
  if (isLiked) {
    count--;
  } else {
    count++;
  }
  
  isLiked = !isLiked;
  likeCount.textContent = count;
});


/*pop up*/

const shareBtn = document.getElementById('shareBtn');
const compartilharPopup = document.querySelector('.compartilhar-popup');
const compartilharPopupOverlay = document.querySelector('.compartilhar-popup-overlay');
const compartilharPopupClose = document.querySelector('.compartilhar-popup-close');

shareBtn.addEventListener('click', function() {
  compartilharPopup.classList.add('active');
  compartilharPopupOverlay.classList.add('active');
});

compartilharPopupClose.addEventListener('click', function() {
  compartilharPopup.classList.remove('active');
  compartilharPopupOverlay.classList.remove('active');
});

compartilharPopupOverlay.addEventListener('click', function() {
  compartilharPopup.classList.remove('active');
  compartilharPopupOverlay.classList.remove('active');
});

