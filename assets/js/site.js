// profile click
const profile = document.getElementById("profile");

const goTo = () => window.open("https://github.com/cyruzin");

profile.addEventListener("click", goTo);

// prepare the page for printing
const print = document.getElementById("print");
const sideMenuLeft = document.getElementById("side-menu-left");
const certifications = document.getElementById("certifications");
const locationFlag = document.getElementById("location");
const contact = document.getElementById("contact");

const hideMenu = () => {
  sideMenuLeft.style.display = "none";
  certifications.style.display = "none";
  print.style.display = "none";
  locationFlag.style.display = "none";
  contact.style.display = "block";

  window.print();
};

const showMenu = () => {
  contact.style.display = "none";
  sideMenuLeft.style.display = "block";
  certifications.style.display = "block";
  print.style.display = "block";
  locationFlag.style.display = "flex";
};

print.addEventListener("click", hideMenu);

window.onafterprint = showMenu;
