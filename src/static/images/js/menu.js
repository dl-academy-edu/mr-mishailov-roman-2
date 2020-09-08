var menuOpen = document.querySelector(".menu-open_js"),
    menuFixed = document.querySelector(".menu-fixed_js"),
    showMenu = document.querySelector(".show-menu_js");

menuOpen.addEventListener("click", function () {
    menuFixed.classList.toggle("header-fixed"),
        showMenu.classList.toggle("show-menu"),
        menuOpen.classList.toggle("header__menu-close")

});