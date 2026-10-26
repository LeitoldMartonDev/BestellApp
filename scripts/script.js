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

  <div class="basket_item" id="basket_item${i.name}"> <button onclick='deleteDish(${JSON.stringify(i)})'>DUMP</button>

  <div class="test" id="basketcounter${i.name}">1</div> <div>portion</div> ${i.name} <div>€</div><div class="test" id="basketprice${i.name}">${i.price}</div>
   

  <button id="buttonAdd${i.name}" onclick='buttonAdd(${JSON.stringify(i)})'>+1</button> <button id="buttonSubtract${i.name}" onclick='buttonSubtract(${JSON.stringify(i)})'>-1</button> <button onclick='deleteDish(${JSON.stringify(i)})'>DUMP</button>
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

function buttonAdd(i) {
  let counter = document.getElementById("basketcounter" + i.name);

  counter.textContent = Number(counter.textContent) + 1;

  let price = document.getElementById("basketprice" + i.name);

  price.textContent = Number(price.textContent) + Number(i.price);

  let buttonAdd = document.getElementById("buttonAdd" + i.name);

  if (Number(counter.textContent) >= 10) {
    buttonAdd.disabled = true;
  }

  let buttonSubtract = document.getElementById("buttonSubtract" + i.name);

  if (Number(counter.textContent) > 1) {
    buttonSubtract.disabled = false;
  }

}

function buttonSubtract(i) {
  let counter = document.getElementById("basketcounter" + i.name);

  counter.textContent = Number(counter.textContent) - 1;

  let price = document.getElementById("basketprice" + i.name);

  price.textContent = Number(price.textContent) - Number(i.price);

  let buttonAdd = document.getElementById("buttonAdd" + i.name);

  if (Number(counter.textContent) < 10) {
    buttonAdd.disabled = false;
  }

  let buttonSubtract = document.getElementById("buttonSubtract" + i.name);

  if (Number(counter.textContent) <= 1) {
    buttonSubtract.disabled = true;
  }
}


function deleteDish(i) {
  removeFromBasket(i);

  let button = document.getElementById("addButton" + i.name);

  button.innerHTML = `
  `;
  button.innerHTML += ` Add to Basket
  `;
  button.disabled = false;
}

function removeFromBasket(i) {
  let deletableItem = document.getElementById("basket_item" + i.name);

  deletableItem.remove();
}
