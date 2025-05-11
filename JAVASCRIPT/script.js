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
  // Se crean las 5 líneas dinámicamente
  const waveLoader = document.querySelector('.wave-loader');
  for (let i = 0; i < 40; i++) {
    const line = document.createElement('span');
    waveLoader.appendChild(line);
  }
  
  setTimeout(typeWriter, 1000);
});



    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navBar = document.querySelector('.nav-bar');

    hamburger.addEventListener('click', () => {
        navBar.classList.toggle('active');
        hamburger.classList.toggle('open');
    });
;