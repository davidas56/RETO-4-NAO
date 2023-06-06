document.addEventListener("DOMContentLoaded", function () {
    const countdownElement = document.getElementById("countdown");
  
    function countdown() {
      const currentDate = new Date();
      const newYearDate = new Date(currentDate.getFullYear() + 1, 0, 1);
      const timeDifference = newYearDate - currentDate;
  
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
      countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  
      if (timeDifference <= 0) {
        countdownElement.innerHTML = "¡Feliz Año Nuevo!";
      }
    }
  
    setInterval(countdown, 1000);
  });
  