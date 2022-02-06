// ========================================================================
// -- Burger menu while on mobile
// - Dom elements and state variables assignement
let burgerBtn = $("#burgerIcon");
let menuOpen = $("nav ul");
let isBurgerMenuOpen = false;

// - opening/closing burger menu fonction
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

// - add events
burgerBtn.addEventListener("click", openBurgerMenu);
menuOpen.addEventListener("click", closeBurgerMenu);


// ========================================================================
// -- Change bar color with color wheel 
let colorPicker = $("#colorPicker");
const addHrColor = e => {
  document.documentElement.style.setProperty("--hr-color", e.target.value);
};
colorPicker.addEventListener("change", e => addHrColor(e));