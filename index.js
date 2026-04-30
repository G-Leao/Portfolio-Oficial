
//ESSE E DO ABOUT--->
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
});
//ate aqui