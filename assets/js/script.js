document.querySelector(".menubtt").addEventListener("click", function() {
    document.querySelector(".menu").classList.toggle("ativo");
});

document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", function() {
        document.querySelector(".menu").classList.remove("ativo");
    });
});

document.addEventListener("click", function(event) {
    let menu = document.querySelector(".menu");
    let menuBtn = document.querySelector(".menubtt");

    if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
        menu.classList.remove("ativo");
    }
});
