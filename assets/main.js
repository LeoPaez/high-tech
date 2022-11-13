// Contenedor de productos del carrito
const productsCart = document.querySelector(".cart-container");
// Botón para abrir y cerrar carrito
const cartBtn = document.querySelector(".cart-icon");
// Icono cerrar carrito
const closeCartIcon = document.querySelector(".close-cart")
// Icono del menú hamburguesa
const burger = document.querySelector(".burger");
// Botón para abrir y cerrar menú
const barsBtn = document.querySelector(".menu-label");
//  Menú (Hamburguesa)
const barsMenu = document.querySelector(".nav-links");
// Carrito
const cartMenu = document.querySelector(".cart");
//  Overlay para tirar facha abajo del menú hamburguesa y el cart.
const overlay = document.querySelector(".overlay");

const toggleMenu = () => {
  barsMenu.classList.toggle("open-menu");
  if (cartMenu.classList.contains("open-cart")) {
    cartMenu.classList.remove("open-cart");
    burger.classList.toggle("open");
    return;
  }
  overlay.classList.toggle("show-overlay");
  burger.classList.toggle("open");
};

const toggleCart = () => {
  cartMenu.classList.toggle("open-cart");
  if (barsMenu.classList.contains("open-menu")) {
    barsMenu.classList.remove("open-menu");
    burger.classList.remove("open");
    return;
  }
  overlay.classList.toggle("show-overlay");
};

const closeOnClick = (e) => {
  if (!e.target.classList.contains("navbar-link")) return;
  barsMenu.classList.remove("open-menu");
  overlay.classList.remove("show-overlay");
  burger.classList.remove("open");
};

const closeOnScroll = () => {
  if (
    !barsMenu.classList.contains("open-menu") &&
    !cartMenu.classList.contains("open-cart")
  )
    return;
  barsMenu.classList.remove("open-menu");
  cartMenu.classList.remove("open-cart");
  overlay.classList.remove("show-overlay");
  burger.classList.remove("open");
};

const closeOnOverlayClick = () => {
  barsMenu.classList.remove("open-menu");
  cartMenu.classList.remove("open-cart");
  overlay.classList.remove("show-overlay");
  burger.classList.remove("open");
};

const init = () => {
  barsBtn.addEventListener("click", toggleMenu);
  cartBtn.addEventListener("click", toggleCart);
  closeCartIcon.addEventListener("click", toggleCart)
  window.addEventListener("scroll", closeOnScroll);
  overlay.addEventListener("click", closeOnOverlayClick);
};

init();