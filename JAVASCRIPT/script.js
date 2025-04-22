/* 
  const canvas = document.getElementById("visualizer");
  const ctx = canvas.getContext("2d");
  const micButton = document.getElementById("micButton");
  const textoReconocido = document.getElementById("textoReconocido");

  let mediaRecorder;
  let audioChunks = [];

  micButton.onclick = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const audioContext = new AudioContext();
    const source = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();
    source.connect(analyser);
    analyser.fftSize = 64;

    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    // Iniciar grabación
    audioChunks = [];
    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();

    mediaRecorder.ondataavailable = (e) => audioChunks.push(e.data);

    mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/webm' }); // Puedes cambiar a audio/wav si deseas
        const formData = new FormData();
        formData.append("file", audioBlob, "grabacion.webm");
        formData.append("model", "whisper-1");
      
        try {
          const response = await fetch("https://api.openai.com/v1/audio/transcriptions", {
            method: "POST",
            headers: {
             
            },
            body: formData
          });
      
          const result = await response.json();
          console.log(result); // 👈 Para ver si devuelve un error
          textoReconocido.textContent = result.text || `Error: ${result.error?.message || "No se pudo transcribir"}`;
        } catch (err) {
          console.error(err);
          textoReconocido.textContent = "Error al conectarse con la API.";
        }
      };

    // Visualización
    function draw() {
      requestAnimationFrame(draw);
      analyser.getByteFrequencyData(dataArray);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const barWidth = canvas.width / dataArray.length;

      let x = 0;
      for (let i = 0; i < dataArray.length; i++) {
        const height = dataArray[i];
        ctx.fillStyle = `rgb(${height + 100}, 50, 255)`;
        ctx.fillRect(x, canvas.height - height, barWidth - 2, height);
        x += barWidth;
      }
    }

    draw();

    // Detener después de 5 segundos
    setTimeout(() => {
      mediaRecorder.stop();
      stream.getTracks().forEach(track => track.stop());
    }, 5000);
  };

 */


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
});