function toggleMenu(params) {
   const menu = document.querySelector(".menu-links");
   const icon = document.querySelector(".x-nav-icon");
   menu.classList.toggle("open");
   icon.classList.toggle("open");
}

function toggleText() {
    const description = document.getElementById("section_text-p2");
    description.classList.toggle("hidden");
}
