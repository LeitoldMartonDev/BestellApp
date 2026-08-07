function init() {
  render();
  renderSoup();
  renderMain();
  renderSalad();
}

function addBasket() {
  addElements();
  basketMove();
}

function addElements() {
  let myBasket = document.getElementById("basket_items");
  myBasket.innerHTML = "";
  myBasket.innerHTML += `
  TEST <br> TEST <br>TEST <br>TEST <br>TEST <br>TEST <br>TEST <br>TEST <br>TEST <br>TEST <br>TEST <br>TEST <br>TEST <br>TEST <br>TEST <br>TEST <br>TEST <br>TEST <br>TEST <br>TEST <br>TEST <br>TEST <br>TEST <br>TEST <br>TEST <br>TEST <br>TEST <br>TEST <br>TEST <br>
  `;
}

function basketMove() {
  document
    .getElementById("basket")
    .classList.replace("basket_out", "basket_in");
}
