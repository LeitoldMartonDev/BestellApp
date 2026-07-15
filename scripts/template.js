function renderSoup() {
  let soupDiv = document.getElementById("soupMenu");
  soupDiv.innerHTML = "";
  for (let i = 0; i < soup.length; i++) {
    let everySoup = soup[i];
    soupDiv.innerHTML += `
    <div>
<b>name:</b> ${everySoup.name}  <br>
<img class="menu_img" src="${everySoup.picture_url}  " alt="${everySoup.name}  "><br>
<b>price:</b> ${everySoup.price} € <br>
<b>description:</b> ${everySoup.description}  <br>
</div>
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