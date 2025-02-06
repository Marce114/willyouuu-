function moveButton() {
    const noButton = document.getElementById("noButton");
    const container = document.querySelector(".container");
    
    const maxWidth = container.clientWidth - noButton.clientWidth;
    const maxHeight = container.clientHeight - noButton.clientHeight;
    
    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;
    
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

function nextPage() {
    window.location.href = "yes.html";
}