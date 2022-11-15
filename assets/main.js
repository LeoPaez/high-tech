// Contenedor de productos más recientes
const recentProducts = document.querySelector(".news__products");
// Contenedor de productos
const products = document.querySelector(".products");
// Contenedor de productos del carrito
const productsCart = document.querySelector(".cart-container");
// El contenedor de las categorías
const categories = document.querySelector(".categories");
// Un htmlCollection de botones de todas las categorías (mostrar el dataset)
const categoriesList = document.querySelectorAll(".category");
// Botón para abrir y cerrar carrito
const cartBtn = document.querySelector(".cart-icon");
// Icono cerrar carrito
const closeCartIcon = document.querySelector(".close-cart")
//El total en precio del carrito
const total = document.querySelector(".total");
// Cantidad de productos en el carrito
const cartItems = document.querySelector(".cart-quantity")
// Botón de comprar
const buyBtn = document.querySelector(".btn-buy");
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
//  Modal de agregado al carrito.
const successModal = document.querySelector(".add-modal");
//  Modal de agregado al carrito.
const deleteBtn = document.querySelector(".btn-delete");

// Local Storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const saveLocalStorage = (cartList) => {
  localStorage.setItem("cart", JSON.stringify(cartList));
};

// Renderizar producto
const renderProduct = (product) => {
  const { id, img, name, price } = product;

  return `
    <div class="product">
      <img class="product__img" src="${img}" alt="">
      <p class="product__name">${name}</p>
      <p class="product__price">$${(price * 280).toLocaleString('us')}</p>
      <button class="product__button"
      data-id="${id}"
      data-img="${img}"
      data-name='${name}'
      data-price='${price}'>Agregar al carrito</button> 
    </div>
  `;
};

// Renderizar solo los productos nuevos
const renderNewProducts = () => {
  const newProducts = productsData.filter(
    (product => product.new === true)
  )
  recentProducts.innerHTML += newProducts
    .map(renderProduct) // .map((e) => renderProduct(e))
    .join("");
};

// Al cargar la pagina renderizar la primera categoria
const renderFirstCategory = () => {
  products.innerHTML += firstCategory()
    .map(renderProduct) // .map((e) => renderProduct(e))
    .join("");
};

// Renderizar productos filtrados
const renderFilteredProducts = (category) => {
  const productsList = productsData.filter(
    (product) => product.category === category
  );
  products.innerHTML = productsList.map(renderProduct).join("");
};

// Renderizar productos
const renderProducts = (index = 0, category = undefined) => {
  if (!category) {
    renderFirstCategory();
    renderNewProducts();
    return;
  }
  renderFilteredProducts(category);
};


//* LOGICA DE FILTROS

// Funcion para cambiar todos los estados relacionados a los filtros
const changeFilterState = (e) => {
  const selectedCategory = e.target.dataset.category;
  // Necesito cambiar el estado visual de los botones
  changeBtnActiveState(selectedCategory);
};

// Funcion para cambiar el estado visual de las categorias (la categoria seleccionada)
const changeBtnActiveState = (selectedCategory) => {
  const categories = [...categoriesList];
  categories.forEach((categoryBtn) => {
    if (categoryBtn.dataset.category !== selectedCategory) {
      categoryBtn.classList.remove("select");
      return;
    }
    categoryBtn.classList.add("select");
  });
};

const applyFilter = (e) => {
  console.log(e.target.dataset);
  if (!e.target.matches(".category, .category__img, .category__name"))
  return;
  changeFilterState(e);
  if (!e.target.dataset.category) {
    products.innerHTML = "";
    renderProducts();
  } else {
    renderProducts(0, e.target.dataset.category);
  }
};

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




//* Logica de agregado de productos y manejo del carrito.

const renderCartProduct = (cartProduct) => {
  const { id, img, name, price, quantity } = cartProduct;
  return `    
    <div class="cart-item">
      <img class="item-img" src="${img}" alt="" />
      <div class="item-info">
        <h3 class="item-title">${name}</h3>
        <span class="item-price">$${(price * 280).toLocaleString('us')}</span>
      </div>
      <div class="item-handler">
        <span class="quantity-handler down" data-id=${id}>-</span>
        <span class="item-quantity">${quantity}</span>
        <span class="quantity-handler up" data-id=${id}>+</span>
      </div>
    </div>
  `
};

const renderCart = () => {
  // Si el carrito esta vacío
  if (!cart.length) {
    productsCart.innerHTML = `<p class="empty-msg"> No hay productos en el carrito. </p>`;
    return;
  }
  // Renderizamos lo que hay
  productsCart.innerHTML = cart.map(renderCartProduct).join("");
};

const getCartTotal = () => {
  return cart.reduce(
    (acc, cur) => acc + Number(cur.price) * Number(cur.quantity),
    0
  );
};

const showTotal = () => {
  total.innerHTML = `${(getCartTotal().toFixed(2) * 280).toLocaleString("us")} ARS`;
};

// Ver cuantos productos tenemos adentro del carrito
const cartQuantity = () => {
  cartItems.innerHTML = `${cart.length}`
}

const disableBtn = (btn) => {
  if (!cart.length) {
    btn.classList.add("disabled");
    return;
  }
  btn.classList.remove("disabled");
};




// Funcion para manipular el añadido de productos

const addUnitToProduct = (product) => {
  cart = cart.map((cartProduct) => {
    return cartProduct.id === product.id
      ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
      : cartProduct;
  });
};

const createCartProduct = (product) => {
  cart = [...cart, { ...product, quantity: 1 }];
};

const isExistingCartProduct = (product) => {
  return cart.find((item) => item.id === product.id);
};

const createProductData = (id, img, name, price) => {
  return { id, img, name, price };
};

const checkCartState = () => {
  saveLocalStorage(cart);
  renderCart(cart);
  showTotal(cart);
  disableBtn(buyBtn);
  disableBtn(deleteBtn);
  cartQuantity()
};

const showSuccessModal = (msg) => {
  successModal.classList.add("active-modal");
  successModal.textContent = msg;
  setTimeout(() => {
    successModal.classList.remove("active-modal");
  }, 1500);
};

const addProduct = (e) => {
  if (!e.target.classList.contains("product__button")) return;
  const { id, img, name, price } = e.target.dataset;

  const product = createProductData(id, img, name, price);

  //El producto exista en el carrito
  if (isExistingCartProduct(product)) {
    addUnitToProduct(product);
    showSuccessModal("Se agregó una unidad del producto al carrito");
  } else {
    //Que no exista el product
    createCartProduct(product);
    showSuccessModal("El producto se ha agregado al carrito");
  }
  checkCartState();
};

const substractProductUnit = (existingProduct) => {
  cart = cart.map((cartProduct) => {
    return cartProduct.id === existingProduct.id
      ? { ...cartProduct, quantity: cartProduct.quantity - 1 }
      : cartProduct;
  });
};

const removeProductFromCart = (existingProduct) => {
  cart = cart.filter((product) => product.id !== existingProduct.id);
  checkCartState();
};

const handleMinusBtnEvent = (id) => {
  const existingCartProduct = cart.find((item) => item.id === id);

  if (existingCartProduct.quantity === 1) {
    if (
      swal({
        title: "¿Estás seguro?",
        text: "¿Desea eliminar el producto del carrito?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Producto borrado correctamente del carrito", {
            icon: "success",
          });
          removeProductFromCart(existingCartProduct);
        } else {
          swal("El producto permanecera en el carrito");
        }
      })
    )
    return;
  }
  substractProductUnit(existingCartProduct);
};

const handlePlusBtnEvent = (id) => {
  const existingCartProduct = cart.find((item) => item.id === id);
  addUnitToProduct(existingCartProduct);
};

const handleQuantity = (e) => {
  if (e.target.classList.contains("down")) {
    handleMinusBtnEvent(e.target.dataset.id);
  } else if (e.target.classList.contains("up")) {
    handlePlusBtnEvent(e.target.dataset.id);
  }
  checkCartState();
};

const resetCartItems = () => {
  cart = [];
  checkCartState();
};

// Si iniciamos alguna accion del carrito lanza una alerta de SweetsAlerts con opciones
const completeCartAction = (confirmMsg, successMsg, cancelMsg) => {
  if (!cart.length) return;
  swal({
    title: "¿Estás seguro?",
    text: confirmMsg,
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      resetCartItems()
      swal(successMsg, {
        icon: "success",
      });
    } else {
      swal(cancelMsg);
    }
  });
};


const completeBuy = () => {
  completeCartAction(
    "¿Desea completar su compra?",
    "La compra se ha realizado correctamente",
    "No se ha completado la compra"
  );
};

const deleteCart = () => {
  completeCartAction(
    "¿Desea vaciar el carrito?",
    "No hay productos en el carrito",
    "No se ha vaciado el carrito"
  );
};

// Boton submit del newsletter
document.querySelector(".footer").addEventListener("click", (e) => {
  e.preventDefault()
});

const init = () => {
  renderProducts();
  categories.addEventListener("click", applyFilter);
  barsBtn.addEventListener("click", toggleMenu);
  cartBtn.addEventListener("click", toggleCart);
  closeCartIcon.addEventListener("click", toggleCart)
  window.addEventListener("scroll", closeOnScroll);
  overlay.addEventListener("click", closeOnOverlayClick);
  document.addEventListener("DOMContentLoaded", renderCart);
  document.addEventListener("DOMContentLoaded", showTotal);
  recentProducts.addEventListener("click", addProduct);
  products.addEventListener("click", addProduct);
  productsCart.addEventListener("click", handleQuantity);
  buyBtn.addEventListener("click", completeBuy);
  deleteBtn.addEventListener("click", deleteCart);
  cartQuantity() // Numero de productos en el carrito
  disableBtn(buyBtn);
  disableBtn(deleteBtn);
};

init();