document.addEventListener("DOMContentLoaded", function () {
    const startBtn = document.getElementById("start-btn");
    const resultElement = document.getElementById("result");
  
    let recognition;
  
    function startRecognition() {
      recognition = new webkitSpeechRecognition() || SpeechRecognition();
      recognition.lang = "es-ES";
      recognition.start();
      recognition.onresult = handleRecognitionResult;
      recognition.onerror = handleRecognitionError;
    }
  
    function handleRecognitionResult(event) {
      const result = event.results[0][0].transcript;
      resultElement.textContent = `Número detectado: ${result}`;
    }
  
    function handleRecognitionError(event) {
      resultElement.textContent = "Error al detectar el número. Inténtalo de nuevo.";
    }
  
    startBtn.addEventListener("click", startRecognition);
  });
  