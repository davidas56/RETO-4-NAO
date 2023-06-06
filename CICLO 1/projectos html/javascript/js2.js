
function loadMoreContent() {
    setTimeout(function() {
        var scrollContent = document.getElementById("scroll-content");

        var newContent = document.createElement("div");
        newContent.className = "scroll-item";
        newContent.textContent = "Nuevo item";
        scrollContent.appendChild(newContent);

        checkScrollEnd();
    }, 1000);
}

function checkScrollEnd() {
    var scrollContainer = document.querySelector(".scroll-container");
    var scrollContent = document.getElementById("scroll-content");

    if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight) {
        loadMoreContent();
    }
}
var scrollContainer = document.querySelector(".scroll-container");
scrollContainer.addEventListener("scroll", checkScrollEnd);
