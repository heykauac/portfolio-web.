
const btnToggle = document.getElementById('theme-toggle');
const body = document.body;

btnToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});


const spanAno = document.querySelectorAll('#ano-atual');
const anoAtual = new Date().getFullYear();

spanAno.forEach(span => {
    span.textContent = anoAtual;
});
