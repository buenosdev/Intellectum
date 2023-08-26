// Seleciona o elemento input
let checkbox = document.querySelector('.switch input[type="checkbox"]');

checkbox.addEventListener('change', function() {
  // Verifica o estado do checkbox
  if (this.checked) {
    document.body.classList.add('dark'); // Adiciona a classe dark ao body
    document.body.classList.remove('light'); // Remove a classe light do body
  } else {
    document.body.classList.add('light'); // Adiciona a classe light ao body
    document.body.classList.remove('dark'); // Remove a classe dark do body
  }
});
