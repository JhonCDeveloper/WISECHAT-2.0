// Efecto de máquina de escribir
const text = "Nuestra IA está calentando motores para ayudarte a vender más 🚀";
const typingText = document.getElementById('typing-text');
let i = 0;

function typeWriter() {
  if (i < text.length) {
    typingText.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, Math.random() * 100 + 50);
  } else {
    typingText.style.borderRight = 'none';
  }
}

// Iniciar la animación cuando la página cargue
window.addEventListener('load', () => {
  // Creamos las 5 líneas dinámicamente
  const waveLoader = document.querySelector('.wave-loader');
  for (let i = 0; i < 5; i++) {
    const line = document.createElement('span');
    waveLoader.appendChild(line);
  }
  
  setTimeout(typeWriter, 1000);
});

// Ir a página de login al presionar quiero potenciar mis ventas
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginButton').addEventListener('click', function() {
        document.getElementById('mensaje').textContent = '¡Has hecho clic en el botón!';
    });

    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navBar = document.querySelector('.nav-bar');

    hamburger.addEventListener('click', () => {
        navBar.classList.toggle('active');
        hamburger.classList.toggle('open');
    });
});