// ====== Global functions ======
function $(selector) {
  return document.querySelector(selector);
}


// -- Generate articles html content from fakedata.js
const generateReview = review => {
  return `
  <br/>
  <a href="${review.URL}">${review.website}</a>
  `
}
const generateArticle = article => {
  return `
  <article>
  <h2>${article.ranking} - ${article.title}</h2>
  <img src="${article.imgSrc}" alt="${article.imgAlt}">
  <p>${article.content}<p/>
  <div class="seeReview">
  See more on reviews:
  ${article.reviewsLinks.map(generateReview).join('')}
  </div>
  </article>
  `
}
const articlesSectionInnerHTML = `
${ARTICLES_TITLE}
${FAKE_ARTICLES_DATA.map(generateArticle).join('')}
`;

$("#bestGamesSection").innerHTML = articlesSectionInnerHTML;


// -- Update color CSS color variables while switching theme (light/dark)
// - update functions
let rootStyle = document.documentElement.style;
let ligthBubble = $("#lightBubble img");
let burgerIcon = $("#burgerIcon img");
let isOnDarkMode = false;

const switchMode = () => {
  if (isOnDarkMode) {
    COLOR_MODES.forEach(DOMElem => {
      document.documentElement.style.setProperty(DOMElem.variableName, DOMElem.lightColor);
    })
    ligthBubble.src = "./icons/lightbubble-black.svg";
    burgerIcon.src = "./icons/burger-black.svg";
  } else {
    COLOR_MODES.forEach(DOMElem => {
      document.documentElement.style.setProperty(DOMElem.variableName, DOMElem.darkColor);
    })
    ligthBubble.src = "./icons/lightbubble-white.svg";
    burgerIcon.src = "./icons/burger-white.svg";
  }
  isOnDarkMode = !isOnDarkMode;
};

// - DOM elements events
let darkBtn = $("#lightBubble");
darkBtn.addEventListener("click", switchMode);


// -- Burger menu while on mobile
// - Opening/closing burger menu fonction
let isBurgerMenuOpen = false;
const openBurgerMenu = () => {
  menuOpen.style.display = "flex";
  isBurgerMenuOpen = !isBurgerMenuOpen;
}
const closeBurgerMenu = () => {
  if (isBurgerMenuOpen) {
    menuOpen.style.display = "none";
    isBurgerMenuOpen = !isBurgerMenuOpen;
  }
}

// - DOM elements events
let burgerBtn = $("#burgerIcon");
let menuOpen = $("nav ul");
burgerBtn.addEventListener("click", openBurgerMenu);
menuOpen.addEventListener("click", closeBurgerMenu);

// -- Change bar color with color wheel
let colorPicker = $("#colorPicker");
const addHrColor = e => {
  document.documentElement.style.setProperty("--hr-color", e.target.value);
};
colorPicker.addEventListener("change", e => addHrColor(e));