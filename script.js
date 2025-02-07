function moveButton() {
    const noButton = document.getElementById("noButton");
    const container = document.querySelector(".container");
    
    const maxWidth = Math.min(container.clientWidth, window.innerWidth) - noButton.clientWidth;
    const maxHeight = Math.min(container.clientHeight, window.innerHeight) - noButton.clientHeight;
    
    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;
    
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

// Perubahan warna saat tombol ditekan
document.getElementById("noButton").addEventListener("mousedown", function() {
    this.style.backgroundColor = "#ff6b81"; // Warna merah muda saat ditekan
});

document.getElementById("noButton").addEventListener("mouseup", function() {
    this.style.backgroundColor = ""; // Kembali ke warna default
});

function nextPage() {
    window.location.href = "yes.html";
}
