const menuEmail = document.querySelector('.navbar-email');
const desktopMenu =  document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCardIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCardIcon.addEventListener('click', toggleCardIcon);

// Funciones para cerrar o abir
function toggleProductDetailContainer(){
  productDetailContainer.classList.toggle('inactive');
  shoppingCartContainer.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
}
function toggleDesktopMenu(){
  desktopMenu.classList.toggle('inactive');
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.add('inactive');

}
function toggleMobileMenu(){
  mobileMenu.classList.toggle('inactive');
  shoppingCartContainer.classList.add('inactive')
  productDetailContainer.classList.add('inactive');
}
function toggleCardIcon(){
  shoppingCartContainer.classList.toggle('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  productDetailContainer.classList.add('inactive')
}



// Define la función formatCurrency fuera de renderProducts
function formatCurrency(price) {
  const formatoColombiano = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
  });
  return formatoColombiano.format(price);
}

// Función para renderizar todos los productos del array productList en .main-container
function renderProducts(arr) {
  const cardsContainer = document.querySelector('.cards-container');
  console,console.log(cardsContainer);
  // Verifica si .cards-container  existe
  if (!cardsContainer) {
    console.error("El elemento 'cardsContainer' no se encontró en el DOM.");
    return;
  }

  for (const product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img');
    productImg.src = product.image;
    productImg.addEventListener('click', () => {
      showProductDetails(product);
    });
    
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    
    productPrice.innerText = formatCurrency(product.price);
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', 'assets/icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}


// Función para mostrar los detalles del producto en #productDetail
function showProductDetails(product) {
const productDetail = document.querySelector('#productDetail');
const body = document.body;
//const overlay = document.querySelector('.overlay');
// Verifica si #productDetail existe
if (!productDetail) {
  console.error("El elemento 'productDetail' no se encontró en el DOM.");
  return;
}
// Actualiza el contenido de #productDetail con los detalles del producto
const productDetailContent = `
  <div class="product-detail-close">
    <img src="./assets/icons/icon_close.png" alt="close">
  </div>
  <img src="${product.image}" alt="${product.name}">
  <div class="product-info">
    <p>${formatCurrency(product.price)}</p>
    <p>${product.name}</p>
    <p>${product.description}</p>
    <button class="primary-button add-to-cart-button">
    <img src="./assets/icons/bt_added_to_cart.svg" alt="add to cart">
    Add to cart
    </button>
  </div>
`;

// Asigna el nuevo contenido a #productDetail
productDetail.innerHTML = productDetailContent;

// Muestra el elemento #productDetail
productDetail.classList.remove('inactive');


//overlay.style.display = 'block';

// Muestra la capa semitransparente
//body.classList.add("fixed-elements");

// Agrega un evento clic al elemento .product-detail-close
const closeButton = productDetail.querySelector('.product-detail-close');
  if (closeButton) {
    closeButton.addEventListener('click', () => {

      // Cierra el elemento #productDetail al hacer clic en .product-detail-close
      productDetail.classList.add('inactive');

      // Oculta la capa semitransparente
      //body.classList.remove("fixed-elements");
      
      //overlay.style.display = 'block';

    });
  }
}



  
const productList = [
  { name: 'HP', price: 1877887, image: 'https://www.alkosto.com/medias/750Wx750H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-197497161816-001.jpg?context=bWFzdGVyfGltYWdlc3wxNjIyNDF8aW1hZ2UvanBlZ3xhRFExTDJoallTOHhNemczT1Rjd01EQTVOVEF3Tmk4M05UQlhlRGMxTUVoZmJXRnpkR1Z5TDJodmRHWnZiR1JsY2k5MGNtRnVjMlpsY2k5cGJtTnZiV2x1Wnk5a1pYQnZjMmwwTDJoNVluSnBjeTFwYm5SbGNtWmhZMlZ6TDBsT0wyMWxaR2xoTDNCeWIyUjFZM1F2TVRrM05EazNNVFl4T0RFMlh6QXdNUzVxY0djfGUyNGI0NjQ5NjFkYTU5MjI2YzU0ZjQ5Y2U0MWEzN2E1MjNhNWM2MjYwNTExNTU2ZWYwMDM5YTg2YjU5ZWJjMGI',description:'Computador Portátil HP Pavilion 15.6" Pulgadas eg0500la Intel Core i5 - RAM 8GB - Disco SSD 256 GB - Plateado.' },
  { name: 'Lenovo', price: 1877887, image: 'https://www.alkosto.com/medias/750Wx750H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-197497202632-001.jpg?context=bWFzdGVyfGltYWdlc3wxOTYxMzB8aW1hZ2UvanBlZ3xhR00zTDJnM05pOHhNemszTlRJM016azJNelUxTUM4M05UQlhlRGMxTUVoZmJXRnpkR1Z5TDJodmRHWnZiR1JsY2k5MGNtRnVjMlpsY2k5cGJtTnZiV2x1Wnk5a1pYQnZjMmwwTDJoNVluSnBjeTFwYm5SbGNtWmhZMlZ6TDBsT0wyMWxaR2xoTDNCeWIyUjFZM1F2TVRrM05EazNNakF5TmpNeVh6QXdNUzVxY0djfGJhYzBkODg0NmRkZjU5YzBmNDUzMzNmN2Y4MDBiZTg2OTBkYjgwYjI3ZmUyNDM4Y2ExOTdjZjg4YzIxM2RmOTI', description:'Computador Portátil HP Pavilion 15.6" Pulgadas eg0500la Intel Core i5 - RAM 8GB - Disco SSD 256 GB - Plateado.'},
  { name: 'Acer', price: 1877887, image: 'https://www.alkosto.com/medias/750Wx750H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-4711121610417-001.jpg?context=bWFzdGVyfGltYWdlc3wxNjgxMjR8aW1hZ2UvanBlZ3xhRE5pTDJoallTOHhNemsyTmpjeE1USXlOak01T0M4M05UQlhlRGMxTUVoZmJXRnpkR1Z5TDJodmRHWnZiR1JsY2k5MGNtRnVjMlpsY2k5cGJtTnZiV2x1Wnk5a1pYQnZjMmwwTDJoNVluSnBjeTFwYm5SbGNtWmhZMlZ6TDBsT0wyMWxaR2xoTDNCeWIyUjFZM1F2TkRjeE1URXlNVFl4TURReE4xOHdNREV1YW5CbnxlYmM1ZTUyZDU5MDBiNDI4YjEzOTJkMTEyNTU1MTY2MmM4N2RlODRiMTMyNjRiYzQwY2ExY2U3NDBjZDRlZGFj', description:'Computador Portátil HP Pavilion 15.6" Pulgadas eg0500la Intel Core i5 - RAM 8GB - Disco SSD 256 GB - Plateado.'},
  { name: 'Apple', price: 1877887, image: 'https://www.alkosto.com/medias/750Wx750H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-194253296775-001.jpg?context=bWFzdGVyfGltYWdlc3wxMzQ0NTV8aW1hZ2UvanBlZ3xhR1JrTDJobE9TOHhNell6TVRjME56STJNRFEwTmk4M05UQlhlRGMxTUVoZmJXRnpkR1Z5TDJodmRHWnZiR1JsY2k5MGNtRnVjMlpsY2k5cGJtTnZiV2x1Wnk5a1pYQnZjMmwwTDJoNVluSnBjeTFwYm5SbGNtWmhZMlZ6TDBsT0wyMWxaR2xoTDNCeWIyUjFZM1F2TVRrME1qVXpNamsyTnpjMVh6QXdNUzVxY0djfGEwMGQ0ODNkYTU0NzYwNWRjMTMyZTk5ZjcxNDlkZmU3Y2MyNzNiYTFlMjE5YjU2ZWJmNzE3ODZlNWNkYjU3N2E',description:'Computador Portátil HP Pavilion 15.6" Pulgadas eg0500la Intel Core i5 - RAM 8GB - Disco SSD 256 GB - Plateado.'},

  { name: 'HP', price: 1250000, image: 'https://www.alkosto.com/medias/750Wx750H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-197192055199-001.jpg?context=bWFzdGVyfGltYWdlc3wyMTMzMjJ8aW1hZ2UvanBlZ3xhRGRoTDJnd01DOHhNelkwT1RBek1UWTFPVFUxTUM4M05UQlhlRGMxTUVoZmJXRnpkR1Z5TDJodmRHWnZiR1JsY2k5MGNtRnVjMlpsY2k5cGJtTnZiV2x1Wnk5a1pYQnZjMmwwTDJoNVluSnBjeTFwYm5SbGNtWmhZMlZ6TDBsT0wyMWxaR2xoTDNCeWIyUjFZM1F2TVRrM01Ua3lNRFUxTVRrNVh6QXdNUzVxY0djfDA5NzVlMzc1ODczMDI2ZjExMTNjMjhlZjhhNDlkNGE5OTYwNzI0OTllZmQzY2UwMTQwNGM1ZGRjM2FlY2JlY2Q', description:'Computador Portátil HP Pavilion 15.6" Pulgadas eg0500la Intel Core i5 - RAM 8GB - Disco SSD 256 GB - Plateado.'},
  { name: 'Lenovo', price: 1877887, image: 'https://www.alkosto.com/medias/750Wx750H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-196803279573-001.jpg?context=bWFzdGVyfGltYWdlc3wxNzc4NTd8aW1hZ2UvanBlZ3xhRE15TDJnNVlTOHhNelkwTWpBek16RXpOVFkwTmk4M05UQlhlRGMxTUVoZmJXRnpkR1Z5TDJodmRHWnZiR1JsY2k5MGNtRnVjMlpsY2k5cGJtTnZiV2x1Wnk5a1pYQnZjMmwwTDJoNVluSnBjeTFwYm5SbGNtWmhZMlZ6TDBsT0wyMWxaR2xoTDNCeWIyUjFZM1F2TVRrMk9EQXpNamM1TlRjelh6QXdNUzVxY0djfDgyZWY2Njg4OGI1ODU2ZWQzZGQyYjU3ZTI5YTQyZjNlN2U3MDY2OTZlMTAzOTM4MmE0YzkwY2QxMDFmMmVkYWY', description:'Computador Portátil HP Pavilion 15.6" Pulgadas eg0500la Intel Core i5 - RAM 8GB - Disco SSD 256 GB - Plateado.'},
  { name: 'Asus', price: 1877887, image: 'https://www.alkosto.com/medias/750Wx750H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-4711081996255-001.jpg?context=bWFzdGVyfGltYWdlc3wzMDk0NTN8aW1hZ2UvanBlZ3xhR1prTDJobFpDOHhNemd6TnpZeU5UWTFOVE15Tmk4M05UQlhlRGMxTUVoZmJXRnpkR1Z5TDJodmRHWnZiR1JsY2k5MGNtRnVjMlpsY2k5cGJtTnZiV2x1Wnk5a1pYQnZjMmwwTDJoNVluSnBjeTFwYm5SbGNtWmhZMlZ6TDBsT0wyMWxaR2xoTDNCeWIyUjFZM1F2TkRjeE1UQTRNVGs1TmpJMU5WOHdNREV1YW5Cbnw0NmU5NzJkYjQ1OTdlZjJkMWZmMzlhN2M0ZDlhOWJmMTY1MjQyZmI0YzZmODkyMzM5YzA5NDdlY2Y5OTg3MDZk', description:'Computador Portátil HP Pavilion 15.6" Pulgadas eg0500la Intel Core i5 - RAM 8GB - Disco SSD 256 GB - Plateado.'},
  { name: 'Apple', price: 1877887, image: 'https://www.alkosto.com/medias/194252125045-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w5NTQzMXxpbWFnZS9qcGVnfGFXMWhaMlZ6TDJobU1DOW9ORGt2TVRBME9UazFNek01TXpBMU1qWXVhbkJufDQyNzdkN2MxOGU0M2I5ZDQyNmMwNDBhNmMwZmZiMDdjODQ2Y2MxMGJjMWFlNTA2NzY1NGE2YTk4ZGUyYjFjNmE' },

  { name: 'Apple', price: 1877887, image: 'https://www.alkosto.com/medias/750Wx750H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-194253241409-001.jpg?context=bWFzdGVyfGltYWdlc3wzMDY0Nzd8aW1hZ2UvanBlZ3xhRGc0TDJobE5DOHhNelE0TkRZMU1ETXpNakU1TUM4M05UQlhlRGMxTUVoZmJXRnpkR1Z5TDJodmRHWnZiR1JsY2k5MGNtRnVjMlpsY2k5cGJtTnZiV2x1Wnk5a1pYQnZjMmwwTDJoNVluSnBjeTFwYm5SbGNtWmhZMlZ6TDBsT0wyMWxaR2xoTDNCeWIyUjFZM1F2TVRrME1qVXpNalF4TkRBNVh6QXdNUzVxY0djfGM4ZmQwMjIyZGU0NWRjMGYzYjZhODBkMzNiYjhmNGI1MzQ0N2RlY2YwMDc5MDc5OTViOGMyMGQzY2FmNmJiMGM', description:'Computador Portátil HP Pavilion 15.6" Pulgadas eg0500la Intel Core i5 - RAM 8GB - Disco SSD 256 GB - Plateado.'},
  { name: 'Lenovo', price: 890000, image: 'https://www.alkosto.com/medias/750Wx750H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-196379176832-001.jpg?context=bWFzdGVyfGltYWdlc3wyMTI5MDR8aW1hZ2UvanBlZ3xhRGt6TDJobU5TOHhNell4TlRjNE5qRTJOREkxTkM4M05UQlhlRGMxTUVoZmJXRnpkR1Z5TDJodmRHWnZiR1JsY2k5MGNtRnVjMlpsY2k5cGJtTnZiV2x1Wnk5a1pYQnZjMmwwTDJoNVluSnBjeTFwYm5SbGNtWmhZMlZ6TDBsT0wyMWxaR2xoTDNCeWIyUjFZM1F2TVRrMk16YzVNVGMyT0RNeVh6QXdNUzVxY0djfDM4MzQ1YThjYjg0ZmJjNWQ3OWI2OGZiODA2Mjc1MmEyOTRiYWUxNjVlZDQwNGNhYTI2NDY2NTNjMWJiOGQ5OGY', description:'Computador Portátil HP Pavilion 15.6" Pulgadas eg0500la Intel Core i5 - RAM 8GB - Disco SSD 256 GB - Plateado.'},
  { name: 'Samsung', price: 1877887, image: 'https://www.alkosto.com/medias/8806092952270-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wyNDk2NzF8aW1hZ2UvanBlZ3xhVzFoWjJWekwyZ3hOUzlvTVRVdk1URTFORE01TXpJMk16TXhNVGd1YW5CbnxmZWZmYmFiY2Y1YmZmOTAzNmExMjA0ZTkyYTU4NTkyZDc2MDgwZTI1ODAxMTQ2OTA5OGUzMGRkN2U4YzA5MDMz' },
  { name: 'Apple', price: 1877887, image: 'https://www.alkosto.com/medias/750Wx750H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-194253387459-001.jpg?context=bWFzdGVyfGltYWdlc3wxMzA5Mzd8aW1hZ2UvanBlZ3xhREV4TDJnME1TOHhNelE0TlRnME9UUTBORE00TWk4M05UQlhlRGMxTUVoZmJXRnpkR1Z5TDJodmRHWnZiR1JsY2k5MGNtRnVjMlpsY2k5cGJtTnZiV2x1Wnk5a1pYQnZjMmwwTDJoNVluSnBjeTFwYm5SbGNtWmhZMlZ6TDBsT0wyMWxaR2xoTDNCeWIyUjFZM1F2TVRrME1qVXpNemczTkRVNVh6QXdNUzVxY0djfDMzZDQ1ZTZkYjk0MmZiOGMyY2ZmM2Y4YjNmNTcyZmIwYmU5ODcwZTk1MDU2YzQxNDYzMzAzNzZlOWNkNzQ1M2I',description:'Computador Portátil HP Pavilion 15.6" Pulgadas eg0500la Intel Core i5 - RAM 8GB - Disco SSD 256 GB - Plateado.'},
  // Agrega más productos aquí
];
  
renderProducts(productList);