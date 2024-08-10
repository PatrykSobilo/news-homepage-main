var topMenu = document.getElementById("topMenu");
var openMobileMenu = document.getElementById("openMobileMenu");
var closeMobileMenu = document.getElementById("closeMobileMenu");

function toggleMenu() {
  if (topMenu.style.right === "0px") {
    topMenu.style.right = "-70%";
    closeMobileMenu.style.display = "none";
  } else {
    topMenu.style.right = "0px";
    closeMobileMenu.style.display = "block";
  }
}

openMobileMenu.addEventListener("click", toggleMenu);
closeMobileMenu.addEventListener("click", toggleMenu);