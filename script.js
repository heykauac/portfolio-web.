
const btnToggle = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'light-theme') {
    body.classList.add('dark-theme'); 
    btnToggle.textContent = '☀️';
} else {
 
    btnToggle.textContent = '🌓';
}

btnToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'light-theme');
        btnToggle.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'dark-theme');
        btnToggle.textContent = '🌓';
    }
});


const typingSpan = document.getElementById('typing-sub-js');
const textToType = "um Analista de Cibersegurança em Construção | Dev | Gamer";
let index = 0;

function typeText() {
    if (index < textToType.length) {
        typingSpan.textContent += textToType.charAt(index);
        index++;
        setTimeout(typeText, 70); 
    }
}

document.addEventListener('DOMContentLoaded', typeText);


const spanAno = document.querySelectorAll('#ano-atual');
const anoAtual = new Date().getFullYear();

spanAno.forEach(span => {
    span.textContent = anoAtual;
});
