function init() {
  render();
  renderSoup();
  renderMain();
  renderSalad();
}

function addBasket(index) {
  console.log("1st round OK");
  addElements(index);
  basketMove();
}

function addElements(i) {

let etel = soup[i];
  console.log(etel.name);
  console.log(etel.price);
 

}

function basketMove() {
  document
    .getElementById("basket")
    .classList.replace("basket_out", "basket_in");
}
