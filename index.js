const dropdown = document.querySelector(".dropdown");
const toggle = document.querySelector(".dropdown-toggle");

// abrir/fechar ao clicar
toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("active");
});

// fechar ao clicar fora
document.addEventListener("click", () => {
    dropdown.classList.remove("active");
});


const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
