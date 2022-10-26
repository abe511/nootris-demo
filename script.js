const main = document.querySelector("main");
const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");

const toggleMenu = () => {
    menu.classList.toggle("show");
    setTimeout(() => {menu.classList.toggle("opacity")}, 0);
};

menuButton.addEventListener("click", toggleMenu);

main.onclick = (e) => {
if(e.target !== menuButton && e.target !== menu && menu.classList.contains("show")) {
    menu.classList.remove("opacity");
    menu.classList.remove("show");
}
};