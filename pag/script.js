const container = document.getElementById('container');
const ctaSection = document.getElementById('ctaSection');
const paymentForm = document.getElementById('paymentForm');
const paymentMethod = document.getElementById('paymentMethod');
const pixFields = document.getElementById('pixFields');
const creditCardFields = document.getElementById('creditCardFields');
const debitCardFields = document.getElementById('debitCardFields');

paymentMethod.addEventListener('change', () => {
    const selectedMethod = paymentMethod.value;

    if (selectedMethod === 'pix') {
        pixFields.style.display = 'block';
        creditCardFields.style.display = 'none';
        debitCardFields.style.display = 'none';
        container.classList.remove('dark');
        container.classList.add('light');
        ctaSection.classList.remove('dark');
        ctaSection.classList.add('light');
        paymentForm.classList.remove('light');
        paymentForm.classList.add('dark');
    } else if (selectedMethod === 'credit_card') {
        pixFields.style.display = 'none';
        creditCardFields.style.display = 'block';
        debitCardFields.style.display = 'none';
        container.classList.remove('light');
        container.classList.add('dark');
        ctaSection.classList.remove('light');
        ctaSection.classList.add('dark');
        paymentForm.classList.remove('dark');
        paymentForm.classList.add('light');
    } else if (selectedMethod === 'debit_card') {
        pixFields.style.display = 'none';
        creditCardFields.style.display = 'none';
        debitCardFields.style.display = 'block';
        container.classList.remove('light');
        container.classList.add('dark');
        ctaSection.classList.remove('light');
        ctaSection.classList.add('dark');
        paymentForm.classList.remove('dark');
        paymentForm.classList.add('light');
    }
});

/* botão de tema */
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle');
    
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        body.classList.add('light');
        themeToggle.innerText = 'Modo Escuro';
    } else {
        body.classList.remove('light');
        body.classList.add('dark');
        themeToggle.innerText = 'Modo Claro';
    }
}


/* Login */

