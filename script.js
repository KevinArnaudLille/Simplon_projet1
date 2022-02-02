// ====== Global functions ======
function $(selector) {
  return document.querySelector(selector);
}

let upGamesImg = $(".upGamesTile img");
console.log(upGamesImg);
upGamesImg.addEventListener("mouseover", () => console.log("over"))

let numb = $(".upGamesTile").children
console.log(numb);
