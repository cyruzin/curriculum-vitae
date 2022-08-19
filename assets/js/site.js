// profile click
const goTo = () => window.open("https://github.com/cyruzin");

const profile = document.getElementById("profile");

profile.addEventListener("click", goTo);

// print section
const hideMenu = () => {
  document.getElementById("side-menu-left").style.display = "none";
  document.getElementById("certifications").style.display = "none";
  document.getElementById("print").style.display = "none";
  document.getElementById("contact").style.display = "block";
  window.print();
};

const print = document.getElementById("print");

print.addEventListener("click", hideMenu);

const showMenu = () => {
  document.getElementById("contact").style.display = "none";
  document.getElementById("side-menu-left").style.display = "block";
  document.getElementById("certifications").style.display = "block";
  document.getElementById("print").style.display = "block";
};

window.onafterprint = showMenu;
