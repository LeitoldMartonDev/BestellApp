function render() {
  let body = document.getElementById("main-body");
  body.innerHTML = "";
  body.innerHTML += `
<header class="theme_colour">
  <div class="header_box rule_1440">
    <img
      src="./assets/img/BestellApp_logo_white.png"
      class="header_img"
      alt="BestellApp logo"
    />

    <img
      src="./assets/img/hamburger menu.png"
      class="header_img"
      alt="Hamburger menu_ not working"
    />
  </div>
</header>

<main>
  <div role="fixing the background image and the logo" class="center_hor">
    <img
      class="background rule_1440"
      src="./assets/img/Background.jpg"
      alt="Background image"
    />
  </div>
  <div class="center_hor">
    <img
      class="logo"
      src="./assets/img/The-Coder_s-dish.jpg"
      alt="company logo"
    />
  </div>

  <section role="Webpage's title and reviews">
    <div class="center_hor center_ver">
      <div class="title main_title title_colour margin10">The coder's</div>
      <div class="title main_title margin10">dish</div>
      <div class="text rating_box">
        <div class="rating_box">&#127776;</div>
        <div class="title rating_box rating">4,5</div>
        <div class="rating_box voter_no">(1256)</div>
      </div>
    </div>
    <div class="center_hor text description">
      The optimalizied food delivery for programmers.
    </div>
  </section>


  <section class="basket basket_out" id="basket" role="Checkout Basket">
    <div id="basket_items" role="Listing your basket items">
    </div>
    <div role="delivery fee">Delivery 3 EUR</div>
    <h2 id="Total" role="Showing the total amount to pay">TOTAL: ( Delivery+ listed elements)  EUR</h2>
    <button id="Checkout">Check out (delete allbasket+adds picture)</button>
  </section>
  

  <section class="menudivider theme_colour" role="soup divider">
    <div class="menudivider center_ver rule_1440 content_width">
      <img
        class="menupic"
        src="./assets/img/cat_soup.png"
        alt="soup category img"
      />
      <div class="title menu_title">Soup</div>
    </div>
  </section>

  <article id="soupMenu" class="content_width"></article>

  <section class="menudivider margin_t100 theme_colour" role="main course divider">
    <aside class="menudivider center_ver rule_1440 content_width">
      <img
        class="menupic"
        src="./assets/img/cat_main.png"
        alt="main course category img"
      />
      <aside class="title menu_title">Main Course</aside>
    </aside>
  </section>

  <article id="mainMenu" class="content_width"></article>

  <section class="menudivider margin_t100 theme_colour" role="salad divider">
    <aside class="menudivider center_ver rule_1440 content_width">
      <img
        class="menupic"
        src="./assets/img/cat_salad.png"
        alt="salad category img"
      />
      <aside class="title menu_title">Salad</aside>
    </aside>
  </section>

  <article id="saladMenu" class="content_width"></article>
</main>

<footer class="theme_colour">
  Copyright: 2026 The Coder's Dish - Márton Leitold - Impressum - Cookie Preferences
</footer>
`;
}

function renderDishes() {
  let SoupDiv = document.getElementById("soupMenu");
  let MainDiv = document.getElementById("mainMenu");
  let SaladDiv = document.getElementById("saladMenu");

  SoupDiv.innerHTML = "";
  MainDiv.innerHTML = "";
  SaladDiv.innerHTML = "";
  for (let dish of dishes) {
    if (dish.type === "Soup") {
      SoupDiv.innerHTML += `


      <article  class="the_menu rule_1440" role="listing the menu">
      <img class="menu_img" src="${dish.picture_url}" alt="${dish.name}">
      <div class="title_and_description">

        <div class="title">
          ${dish.name}
        </div>
        <div class="description menu_description">
          ${dish.description}
        </div>
      </div>

      <div class="price_and_button">
        <div class="title">
         Price: ${dish.price} €
        </div>
        <button onclick='addBasket(${JSON.stringify(dish)})' id="addButton${dish.name}" >Add to Basket</button>          
      </div>
    </article>
    

`;
    }

    if (dish.type === "Maincourse") {
      MainDiv.innerHTML += `


      <article  class="the_menu rule_1440" role="listing the menu">
      <img class="menu_img" src="${dish.picture_url}" alt="${dish.name}">
      <div class="title_and_description">

        <div class="title">
          ${dish.name}
        </div>
        <div class="description menu_description">
          ${dish.description}
        </div>
      </div>

      <div class="price_and_button">
        <div class="title">
         Price: ${dish.price} €
        </div>
        <button onclick='addBasket(${JSON.stringify(dish)})' id="addButton${dish.name}"  >Add to Basket</button>          
      </div>
    </article>
    

`;
    }

    if (dish.type === "Salad") {
      SaladDiv.innerHTML += `


      <article  class="the_menu rule_1440" role="listing the menu">
      <img class="menu_img" src="${dish.picture_url}" alt="${dish.name}">
      <div class="title_and_description">

        <div class="title">
          ${dish.name}
        </div>
        <div class="description menu_description">
          ${dish.description}
        </div>
      </div>

      <div class="price_and_button">
        <div class="title">
         Price: ${dish.price} €
        </div>
        <button onclick='addBasket(${JSON.stringify(dish)})' id="addButton${dish.name}"  >Add to Basket</button>          
      </div>
    </article>
    

`;
    }
  }
}
