// pegar elementos
const modal = document.getElementById("modal");
const imgAmpliada = document.getElementById("img-ampliada");

// abrir imagem
function abrirImagem(img) {
    modal.classList.add("active");
    imgAmpliada.src = img.src;
}

function fecharImagem() {
    modal.classList.remove("active");
}
// fechar com ESC
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        modal.style.display = "none";
    }
});

imgAmpliada.addEventListener("click", function (e) {
    e.stopPropagation();
});


const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// dropdown mobile
const dropdown = document.querySelector(".dropdown");

dropdown.addEventListener("click", () => {
    dropdown.classList.toggle("active");
});
