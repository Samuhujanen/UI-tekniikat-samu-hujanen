const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-menu");
const btn = document.getElementById("btn");

menu.addEventListener("click", function () {
  menuLinks.classList.toggle("active");
});

btn.addEventListener("click", () => {
  if (btn.innerText === "MENU") {
    btn.innerText = "CLOSE";
  } else {
    btn.innerText = "MENU";
  }
});
