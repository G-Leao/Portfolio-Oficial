function abrirImagem(img) {
    const modal = document.getElementById("modal");
    const imgAmpliada = document.getElementById("img-ampliada");

    modal.style.display = "flex";
    imgAmpliada.src = img.src;
}

function fecharImagem() {
    document.getElementById("modal").style.display = "none";
}

// Fechar com ESC
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        fecharImagem();
    }
});