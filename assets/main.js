// Contenedor de productos del carrito
const productsCart = document.querySelector(".cart-container");
// Botón para abrir y cerrar carrito
const cartBtn = document.querySelector(".cart-icon");
// Icono cerrar carrito
const closeCartIcon = document.querySelector(".close-cart")
// Carrito
const cartMenu = document.querySelector(".cart");
//  Overlay para tirar facha abajo del menú hamburguesa y el cart.
const overlay = document.querySelector(".overlay");

const toggleCart = () => {
  cartMenu.classList.toggle("open-cart");
  overlay.classList.toggle("show-overlay");
};

const closeOnClick = (e) => {
  if (!e.target.classList.contains("navbar-link")) return;
  overlay.classList.remove("show-overlay");
};

const closeOnScroll = () => {
  if (
    !cartMenu.classList.contains("open-cart")
  )
    return;
  cartMenu.classList.remove("open-cart");
  overlay.classList.remove("show-overlay");
};

const closeOnOverlayClick = () => {
  cartMenu.classList.remove("open-cart");
  overlay.classList.remove("show-overlay");
};

const init = () => {
  cartBtn.addEventListener("click", toggleCart);
  closeCartIcon.addEventListener("click", toggleCart)
  window.addEventListener("scroll", closeOnScroll);
  overlay.addEventListener("click", closeOnOverlayClick);
};

init();