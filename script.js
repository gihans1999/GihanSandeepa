document.addEventListener("DOMContentLoaded", function () {
  var menu = document.getElementById("menu");
  var menuDiv = document.querySelector("#menudiv nav ul");

  menu.addEventListener("click", function () {
    toggleMenu();
  });

  function toggleMenu() {
    if (menuDiv.style.display === "none" || menuDiv.style.display === "") {
      menuDiv.style.height = "30px";
      menuDiv.style.transition = "height 1s ease";

      menuDiv.style.display = "block";
    } else {
      menuDiv.style.height = "0";

      menuDiv.style.transition = "height 1s ease";

      menuDiv.style.display = "none";
    }
  }
});

a = document.getElementById("alcet");
function closeback() {
  a.style.display = "none";
}
function showup() {
  a.style.display = "flex";
}
b = document.getElementById("olcet");
function closeback2() {
  b.style.display = "none";
}
function showup2() {
  b.style.display = "flex";
}
c = document.getElementById("olcet2");
function closeback3() {
  c.style.display = "none";
}
function showup3() {
  c.style.display = "flex";
}

function showtab2() {
  document.getElementById("qulificationdiv2").style.display = "none";
  document.getElementById("qulificationdiv3").style.display = "none";

  document.getElementById("qulificationdiv").style.display = "flex";
  document.getElementById("qulificationdiv").style.display = "flex";
  if (window.innerWidth < 860) {
    document.getElementById("contactdiv").style.top = "400%";
  } else {
    document.getElementById("contactdiv").style.top = "300%";
  }
}

function showtab1() {
  document.getElementById("qulificationdiv").style.display = "none";
  document.getElementById("qulificationdiv3").style.display = "none";

  document.getElementById("qulificationdiv2").style.display = "flex";
  document.getElementById("contactdiv").style.top = "300%";
}

function showtab3() {
  document.getElementById("qulificationdiv").style.display = "none";
  document.getElementById("qulificationdiv2").style.display = "none";

  document.getElementById("qulificationdiv3").style.display = "flex";

  if (window.innerWidth < 860) {
    document.getElementById("contactdiv").style.top = "445%";
  } else {
    document.getElementById("contactdiv").style.top = "335%";
  }
}
window.addEventListener("scroll", function () {
  var x = window.scrollY;
  if (x > 0 && x < 1280) {
    document.getElementById("rightone1").style.display = "flex";
    document.getElementById("rightone2").style.display = "flex";
    document.getElementById("rightone3").style.display = "flex";
    document.getElementById("leftone1").style.display = "flex";
    document.getElementById("leftone2").style.display = "flex";
    document.getElementById("leftone3").style.display = "flex";
  } else {
    document.getElementById("rightone1").style.display = "none";
    document.getElementById("rightone2").style.display = "none";
    document.getElementById("rightone3").style.display = "none";
    document.getElementById("leftone1").style.display = "none";
    document.getElementById("leftone2").style.display = "none";
    document.getElementById("leftone3").style.display = "none";
  }
});

window.addEventListener("resize", function () {
  // Code to handle window resize
});

window.addEventListener("resize", function () {
  if (
    document.getElementById("qulificationdiv").style.display == "flex" &&
    window.innerWidth < 860
  ) {
    document.getElementById("contactdiv").style.top = "400%";
  } else if (
    document.getElementById("qulificationdiv3").style.display == "flex" &&
    window.innerWidth < 860
  ) {
    document.getElementById("contactdiv").style.top = "445%";
  } else if (
    document.getElementById("qulificationdiv").style.display == "flex" &&
    window.innerWidth > 860
  ) {
    document.getElementById("contactdiv").style.top = "300%";
  } else if (
    document.getElementById("qulificationdiv3").style.display == "flex" &&
    window.innerWidth > 860
  ) {
    document.getElementById("contactdiv").style.top = "335%";
  }
  // Code to handle window resize
});
