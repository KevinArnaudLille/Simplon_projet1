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
// - update function
let root = document.documentElement;
let ligthBubble = $("#lightBubble img");
let isOnDarkMode = false;
const switchMode = () => {
  if (isOnDarkMode) {
    root.style.setProperty("--text-color", "black");
    root.style.setProperty("--main-background-color", "white");
    root.style.setProperty("--article-background-color", "#BAD4DE");
    root.style.setProperty("--navbar-hover-color", "#BAD4DE");
    ligthBubble.src = "./icons/lightbubble-black.svg";
  } else {
    root.style.setProperty("--text-color", "white");
    root.style.setProperty("--main-background-color", "black");
    root.style.setProperty("--article-background-color", "#000E13");
    root.style.setProperty("--navbar-hover-color", "#082E3F");
    ligthBubble.src = "./icons/lightbubble-white.svg";
  }
  isOnDarkMode = !isOnDarkMode;
};
// - update event
let darkBtn = $("#lightBubble");
darkBtn.addEventListener("click", switchMode);