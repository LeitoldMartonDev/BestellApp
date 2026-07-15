function renderSoup() {
  let soupDiv = document.getElementById("soupMenu");
  soupDiv.innerHTML = "";
  for (let i = 0; i < soup.length; i++) {
    let everySoup = soup[i];
    soupDiv.innerHTML += `


<article class="the_menu rule_1440" role="listing the menu">
      <img class="menu_img" src="${everySoup.picture_url}" alt="${everySoup.name}">
      <div class="title_and_description">

        <div class="title">
          ${everySoup.name}
        </div>
        <div class="description menu_description">
          ${everySoup.description}
        </div>
      </div>

      <div class="price_and_button">
        <div class="title">
         Price: ${everySoup.price} €
        </div>
        <button type="">Add to Basket</button>          
      </div>
    </article>

`;
  }
}

function renderMain() {
  let mainDiv = document.getElementById("mainMenu");
  mainDiv.innerHTML = "";
  for (let i = 0; i < maincourse.length; i++) {
    let everyMain = maincourse[i];
    mainDiv.innerHTML += `
    <div>
<b>name:</b> ${everyMain.name}  <br>
<img class="menu_img" src="${everyMain.picture_url}  " alt="${everyMain.name}  "> <br>
<b>price:</b> ${everyMain.price} €<br>
<b>description:</b> ${everyMain.description}  <br>
</div>
`;
  }
}

function renderSalad() {
  let saladDiv = document.getElementById("saladMenu");
  saladDiv.innerHTML = "";
  for (let i = 0; i < salad.length; i++) {
    let everySalad = salad[i];
    saladDiv.innerHTML += `
    <div>
<b>name:</b> ${everySalad.name}  <br>
<img class="menu_img" src="${everySalad.picture_url}  " alt="${everySalad.name}  "> <br>
<b>price:</b> ${everySalad.price} € <br>
<b>description:</b> ${everySalad.description}  <br>
</div>
`;
  }
}