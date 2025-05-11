document.addEventListener("DOMContentLoaded", () => {
    let currentStep = 0;
    const steps = document.querySelectorAll(".step");
    const nextButtons = document.querySelectorAll(".next-button");
  
    function showStep(index) {
      steps.forEach((step, i) => {
        step.classList.toggle("active", i === index);
      });
    }
  
    nextButtons.forEach(button => {
      button.addEventListener("click", () => {
        if (currentStep < steps.length - 1) {
          currentStep++;
          showStep(currentStep);
        }
      });
    });
  
    document.getElementById("multiStepForm").addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Formulario enviado con éxito");
      // Aquí puedes guardar datos o redirigir
    });
  });