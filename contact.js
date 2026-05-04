document.addEventListener("DOMContentLoaded", () => {

    // animação scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.15
    });

    document.querySelectorAll('.fade-slide').forEach(el => {
        observer.observe(el);

        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add('show');
        }
    });

    // MENU MOBILE (ESSENCIAL)
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // DROPDOWN
    const dropdown = document.querySelector(".dropdown");
    const dropdownLink = dropdown.querySelector(".dropdown-toggle");

    dropdownLink.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation(); // importante
        dropdown.classList.toggle("active");
    });

    // fechar dropdown ao clicar fora
    document.addEventListener("click", () => {
        dropdown.classList.remove("active");
    });

});
