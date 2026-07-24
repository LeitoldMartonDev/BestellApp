function render() {
  let body = document.getElementById("main-body");
  body.innerHTML = "";
  body.innerHTML += `

       <section class="basket" id="basket" role="Checkout Basket">

   <div>
   Dish one costs 13 EUR <br>
    Dish two cost 15 EUR <br>
    Delivery 3 EUR <br>
    <h2>TOTAL 31 EUR</h2>
    <button> Check out </button>
    </div>

    
    </section>

<header class="theme_colour">

      <div class="header_box rule_1440">
        <img src="./assets/img/BestellApp_logo_white.png" class="header_img" alt="BestellApp logo" />

        <img src="./assets/img/hamburger menu.png" class="header_img" alt="Hamburger menu_ not working" />
      </div>
    </header>

<main>
    <div role="fixing the background image and the logo" class="center_hor">

      <img class="background rule_1440" src="./assets/img/Background.jpg" alt="Background image">
    </div>
    <div class="center_hor ">
      <img class="logo" src="./assets/img/The-Coder_s-dish.jpg" alt="company logo">
    </div>

    <section role="Webpage's title and reviews">
      <div class="center_hor center_ver">
        <div class="title main_title title_colour margin10">The coder's</div>
        <div class="title main_title margin10">dish</div>
        <div class="text rating_box">
          <div class="rating_box ">
            &#127776;
          </div>
          <div class="title rating_box rating">
            4,5
          </div>
          <div class="rating_box voter_no"> 
            (1256)
          </div>
        </div>
      </div>
      <div class="center_hor text description">The optimalizied food delivery for programmers.</div>
    </section>


    <section class="menudivider theme_colour" role="soup divider">
      <div class="menudivider center_ver rule_1440">
        <img class="menupic" src="./assets/img/cat_soup.png" alt="soup category img">
        <div class="title menu_title">
          Soup
        </div>
      </div>
    </section>

    <article id="soupMenu">
    </article>

    <section class="menudivider theme_colour" role="main course divider">
      <aside class="menudivider center_ver rule_1440">
        <img class="menupic" src="./assets/img/cat_main.png" alt="main course category img">
        <aside class="title menu_title">
          Main Course
        </aside>
      </aside>
    </section>

    <article  id="mainMenu">
    </article>

    <section class="menudivider theme_colour" role="salad divider">
      <aside class="menudivider center_ver rule_1440">
        <img class="menupic" src="./assets/img/cat_salad.png" alt="salad category img">
        <aside class="title menu_title">
          Salad
        </aside>
      </aside>
    </section>

    <article  id="saladMenu">
    </article>

   

  </main>
  

  <footer class="theme_colour">
    Copyright: 2026 The Coder's Dish - Impressum - Cookie Preferences
  </footer>



`;
}

function renderSoup() {
  let soupDiv = document.getElementById("soupMenu");
  soupDiv.innerHTML = "";
  for (let i = 0; i < soup.length; i++) {
    let everySoup = soup[i];
    soupDiv.innerHTML += `


      <article  class="the_menu rule_1440" role="listing the menu">
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
    
<article class="the_menu rule_1440" role="listing the menu">
      <img class="menu_img" src="${everyMain.picture_url}" alt="${everyMain.name}">
      <div class="title_and_description">

        <div class="title">
          ${everyMain.name}
        </div>
        <div class="description menu_description">
          ${everyMain.description}
        </div>
      </div>

      <div class="price_and_button">
        <div class="title">
         Price: ${everyMain.price} €
        </div>
        <button type="">Add to Basket</button>          
      </div>
    </article>
`;
  }
}

function renderSalad() {
  let saladDiv = document.getElementById("saladMenu");
  saladDiv.innerHTML = "";
  for (let i = 0; i < salad.length; i++) {
    let everySalad = salad[i];
    saladDiv.innerHTML += `
    <article class="the_menu rule_1440" role="listing the menu">
      <img class="menu_img" src="${everySalad.picture_url}" alt="${everySalad.name}">
      <div class="title_and_description">

        <div class="title">
          ${everySalad.name}
        </div>
        <div class="description menu_description">
          ${everySalad.description}
        </div>
      </div>

      <div class="price_and_button">
        <div class="title">
         Price: ${everySalad.price} €
        </div>
        <button type="">Add to Basket</button>          
      </div>
    </article>
</div>
`;
  }
}
