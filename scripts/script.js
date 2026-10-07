function init() {
  render();
  renderDishes();
}

function addBasket(index) {
  addElements(index);
  basketMove();
}

function addElements(i) {

 
  addedButton();

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
  document.getElementById("basket")
    .classList.replace("basket_out", "basket_in");
}

function addedButton() {
  let item = document.getElementById("add_to_basket");
  item.innerHTML = `
  `;
  item.innerHTML += `
  Added
  `;


}
