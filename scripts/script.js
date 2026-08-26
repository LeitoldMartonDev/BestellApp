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
 
  let container = document.getElementById("basket_items");

  container.innerHTML += `

  <div class="basket_item">
  ${etel.name} ${etel.price}

  <button type="">+1</button><button type="">DUMP</button>
  </div>
  `;

}

function basketMove() {
  document
    .getElementById("basket")
    .classList.replace("basket_out", "basket_in");
}
