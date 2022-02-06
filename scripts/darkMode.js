// ========================================================================
// -- Update color CSS color variables while switching theme (light/dark) 
// - Dom elements and state variables assignement
let rootStyle = document.documentElement.style;
let ligthBubble = $("#lightBubble img");
let burgerIcon = $("#burgerIcon img");
let isOnDarkMode = false;

// - update functions
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

// - add events
let darkBtn = $("#lightBubble");
darkBtn.addEventListener("click", switchMode);