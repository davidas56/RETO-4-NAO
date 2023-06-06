document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.getElementById("scroll-container");
    const loadingElement = document.getElementById("loading");
  
    let isLoading = false;
  
    function loadMoreContent() {
      if (isLoading) return;
  
      isLoading = true;
      loadingElement.style.display = "block";
  
      setTimeout(function () {
        // Simulación de carga de contenido
        const newContent = document.createElement("div");
        newContent.classList.add("bg-gray-200", "p-4", "mb-4");
        newContent.innerHTML = "<p>Contenido adicional</p>";
        scrollContainer.appendChild(newContent);
  
        isLoading = false;
        loadingElement.style.display = "none";
      }, 2000);
    }
  
    function handleScroll() {
      const scrollTop = scrollContainer.scrollTop;
      const scrollHeight = scrollContainer.scrollHeight;
      const clientHeight = scrollContainer.clientHeight;
  
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        loadMoreContent();
      }
    }
  
    scrollContainer.addEventListener("scroll", handleScroll);
  });
  
