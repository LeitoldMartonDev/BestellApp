function init() {
  render();
  renderDishes();
}

function addBasket(index) {
  addElements(index);
  basketMove();
}

function addElements(i) {
  addedButton(i);

  let container = document.getElementById("basket_items");

  container.innerHTML += `

  <div class="basket_item">
  ${i.name} ${i.price}

  <button type="">+1</button><button type="">DUMP</button>
  </div>
  `;
}

function basketMove() {
  document
    .getElementById("basket")
    .classList.replace("basket_out", "basket_in");
}

function addedButton(i) {
  let button = document.getElementById("addButton" + i.name);

  button.innerHTML = `
  `;
  button.innerHTML += ` Added
  `;
  button.disabled = true;
}
