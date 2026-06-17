

const closeMenu = document.querySelector(".close-menu");
const openMenu = document.querySelector(".open-menu");
const mobileMenu = document.querySelector("#mobile-navbar");



function toggleMobileMenu(button) {

    if (button.target.className == "open-menu-icon") {
        mobileMenu.style.left = "0";
    } else if (button.target.className == "close-menu-icon") {
        mobileMenu.style.left = "100%";
    }
}

openMenu.addEventListener("click", (e) => {
    toggleMobileMenu(e);
});

closeMenu.addEventListener("click", (e) => {
    toggleMobileMenu(e);
})