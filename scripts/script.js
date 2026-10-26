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

  <div class="test" id="basketcounter${i.name}">1</div> <div>portion</div> ${i.name} <div>€</div><div class="test" id="basketprice${i.name}">${i.price}</div>
   

  <button onclick='buttonAdd(${JSON.stringify(i)})'>+1</button><button>DUMP</button>
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

  console.log(i.name); 
  console.log(i.price);
  console.log(price);
  console.log(counter);
}

