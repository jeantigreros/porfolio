function toggleMenu(params) {
   const menu = document.querySelector(".menu-links");
   const icon = document.querySelector(".x-nav-icon");
   menu.classList.toggle("open");
   icon.classList.toggle("open");
}

var copy = document.querySelector('.logos-slide').cloneNode(true);
document.querySelector('.logos-slide').appendChild(copy);
