function mobileMenuClick() {
  var siteNav = document.getElementById("site-nav");
  if (siteNav.style.display === "block") {
    siteNav.style.display = "none";
  } else {
    siteNav.style.display = "block";
  }
}

window.addEventListener("resize", function () {
  var siteNav = document.getElementById("site-nav");

  if (this.window.outerWidth <= 600) {
    siteNav.style.display = "none";
  } else {
    siteNav.style.display = "block";
  }
});
