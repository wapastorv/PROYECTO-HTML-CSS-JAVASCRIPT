const menuEmail = document.querySelector('.navbar-email');
const desktopMenu =  document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');

}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');

}

function renderProducts(arr) {
    const cardsContainer = document.querySelector('.cards-container');
    
    if (!cardsContainer) {
      console.error("El elemento 'cardsContainer' no se encontró en el DOM.");
      return;
    }
  
    for (const product of arr) {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
    
      const productImg = document.createElement('img');
      productImg.src = product.image;
    
      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');
    
      const productInfoDiv = document.createElement('div');
    
      const productPrice = document.createElement('p');
      productPrice.innerText = `$${product.price}`;
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
  
  const productList = [
    { name: 'HP', price: 500, image: 'https://www.alkosto.com/medias/750Wx750H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-197497161816-001.jpg?context=bWFzdGVyfGltYWdlc3wxNjIyNDF8aW1hZ2UvanBlZ3xhRFExTDJoallTOHhNemczT1Rjd01EQTVOVEF3Tmk4M05UQlhlRGMxTUVoZmJXRnpkR1Z5TDJodmRHWnZiR1JsY2k5MGNtRnVjMlpsY2k5cGJtTnZiV2x1Wnk5a1pYQnZjMmwwTDJoNVluSnBjeTFwYm5SbGNtWmhZMlZ6TDBsT0wyMWxaR2xoTDNCeWIyUjFZM1F2TVRrM05EazNNVFl4T0RFMlh6QXdNUzVxY0djfGUyNGI0NjQ5NjFkYTU5MjI2YzU0ZjQ5Y2U0MWEzN2E1MjNhNWM2MjYwNTExNTU2ZWYwMDM5YTg2YjU5ZWJjMGI' },
    { name: 'Lenovo', price: 600, image: 'https://www.alkosto.com/medias/750Wx750H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-197497202632-001.jpg?context=bWFzdGVyfGltYWdlc3wxOTYxMzB8aW1hZ2UvanBlZ3xhR00zTDJnM05pOHhNemszTlRJM016azJNelUxTUM4M05UQlhlRGMxTUVoZmJXRnpkR1Z5TDJodmRHWnZiR1JsY2k5MGNtRnVjMlpsY2k5cGJtTnZiV2x1Wnk5a1pYQnZjMmwwTDJoNVluSnBjeTFwYm5SbGNtWmhZMlZ6TDBsT0wyMWxaR2xoTDNCeWIyUjFZM1F2TVRrM05EazNNakF5TmpNeVh6QXdNUzVxY0djfGJhYzBkODg0NmRkZjU5YzBmNDUzMzNmN2Y4MDBiZTg2OTBkYjgwYjI3ZmUyNDM4Y2ExOTdjZjg4YzIxM2RmOTI' },
    { name: 'HP', price: 500, image: 'https://www.alkosto.com/medias/750Wx750H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-197497161816-001.jpg?context=bWFzdGVyfGltYWdlc3wxNjIyNDF8aW1hZ2UvanBlZ3xhRFExTDJoallTOHhNemczT1Rjd01EQTVOVEF3Tmk4M05UQlhlRGMxTUVoZmJXRnpkR1Z5TDJodmRHWnZiR1JsY2k5MGNtRnVjMlpsY2k5cGJtTnZiV2x1Wnk5a1pYQnZjMmwwTDJoNVluSnBjeTFwYm5SbGNtWmhZMlZ6TDBsT0wyMWxaR2xoTDNCeWIyUjFZM1F2TVRrM05EazNNVFl4T0RFMlh6QXdNUzVxY0djfGUyNGI0NjQ5NjFkYTU5MjI2YzU0ZjQ5Y2U0MWEzN2E1MjNhNWM2MjYwNTExNTU2ZWYwMDM5YTg2YjU5ZWJjMGI' },
    { name: 'Lenovo', price: 600, image: 'https://www.alkosto.com/medias/750Wx750H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-197497202632-001.jpg?context=bWFzdGVyfGltYWdlc3wxOTYxMzB8aW1hZ2UvanBlZ3xhR00zTDJnM05pOHhNemszTlRJM016azJNelUxTUM4M05UQlhlRGMxTUVoZmJXRnpkR1Z5TDJodmRHWnZiR1JsY2k5MGNtRnVjMlpsY2k5cGJtTnZiV2x1Wnk5a1pYQnZjMmwwTDJoNVluSnBjeTFwYm5SbGNtWmhZMlZ6TDBsT0wyMWxaR2xoTDNCeWIyUjFZM1F2TVRrM05EazNNakF5TmpNeVh6QXdNUzVxY0djfGJhYzBkODg0NmRkZjU5YzBmNDUzMzNmN2Y4MDBiZTg2OTBkYjgwYjI3ZmUyNDM4Y2ExOTdjZjg4YzIxM2RmOTI' },
    { name: 'HP', price: 500, image: 'https://www.alkosto.com/medias/750Wx750H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-197497161816-001.jpg?context=bWFzdGVyfGltYWdlc3wxNjIyNDF8aW1hZ2UvanBlZ3xhRFExTDJoallTOHhNemczT1Rjd01EQTVOVEF3Tmk4M05UQlhlRGMxTUVoZmJXRnpkR1Z5TDJodmRHWnZiR1JsY2k5MGNtRnVjMlpsY2k5cGJtTnZiV2x1Wnk5a1pYQnZjMmwwTDJoNVluSnBjeTFwYm5SbGNtWmhZMlZ6TDBsT0wyMWxaR2xoTDNCeWIyUjFZM1F2TVRrM05EazNNVFl4T0RFMlh6QXdNUzVxY0djfGUyNGI0NjQ5NjFkYTU5MjI2YzU0ZjQ5Y2U0MWEzN2E1MjNhNWM2MjYwNTExNTU2ZWYwMDM5YTg2YjU5ZWJjMGI' },
    { name: 'Lenovo', price: 600, image: 'https://www.alkosto.com/medias/750Wx750H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-197497202632-001.jpg?context=bWFzdGVyfGltYWdlc3wxOTYxMzB8aW1hZ2UvanBlZ3xhR00zTDJnM05pOHhNemszTlRJM016azJNelUxTUM4M05UQlhlRGMxTUVoZmJXRnpkR1Z5TDJodmRHWnZiR1JsY2k5MGNtRnVjMlpsY2k5cGJtTnZiV2x1Wnk5a1pYQnZjMmwwTDJoNVluSnBjeTFwYm5SbGNtWmhZMlZ6TDBsT0wyMWxaR2xoTDNCeWIyUjFZM1F2TVRrM05EazNNakF5TmpNeVh6QXdNUzVxY0djfGJhYzBkODg0NmRkZjU5YzBmNDUzMzNmN2Y4MDBiZTg2OTBkYjgwYjI3ZmUyNDM4Y2ExOTdjZjg4YzIxM2RmOTI' },
    { name: 'HP', price: 500, image: 'https://www.alkosto.com/medias/750Wx750H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-197497161816-001.jpg?context=bWFzdGVyfGltYWdlc3wxNjIyNDF8aW1hZ2UvanBlZ3xhRFExTDJoallTOHhNemczT1Rjd01EQTVOVEF3Tmk4M05UQlhlRGMxTUVoZmJXRnpkR1Z5TDJodmRHWnZiR1JsY2k5MGNtRnVjMlpsY2k5cGJtTnZiV2x1Wnk5a1pYQnZjMmwwTDJoNVluSnBjeTFwYm5SbGNtWmhZMlZ6TDBsT0wyMWxaR2xoTDNCeWIyUjFZM1F2TVRrM05EazNNVFl4T0RFMlh6QXdNUzVxY0djfGUyNGI0NjQ5NjFkYTU5MjI2YzU0ZjQ5Y2U0MWEzN2E1MjNhNWM2MjYwNTExNTU2ZWYwMDM5YTg2YjU5ZWJjMGI' },
    { name: 'Lenovo', price: 600, image: 'https://www.alkosto.com/medias/750Wx750H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-197497202632-001.jpg?context=bWFzdGVyfGltYWdlc3wxOTYxMzB8aW1hZ2UvanBlZ3xhR00zTDJnM05pOHhNemszTlRJM016azJNelUxTUM4M05UQlhlRGMxTUVoZmJXRnpkR1Z5TDJodmRHWnZiR1JsY2k5MGNtRnVjMlpsY2k5cGJtTnZiV2x1Wnk5a1pYQnZjMmwwTDJoNVluSnBjeTFwYm5SbGNtWmhZMlZ6TDBsT0wyMWxaR2xoTDNCeWIyUjFZM1F2TVRrM05EazNNakF5TmpNeVh6QXdNUzVxY0djfGJhYzBkODg0NmRkZjU5YzBmNDUzMzNmN2Y4MDBiZTg2OTBkYjgwYjI3ZmUyNDM4Y2ExOTdjZjg4YzIxM2RmOTI' },
    // Agrega más productos aquí
  ];
  
  renderProducts(productList);