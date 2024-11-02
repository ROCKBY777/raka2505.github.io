function toggleReadMore(dotsId, moreId, btnId) {
  var dots = document.getElementById(dotsId);
  var moreText = document.getElementById(moreId);
  var btnText = document.getElementById(btnId);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.textContent = "Read More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.textContent = "Read Less";
    moreText.style.display = "inline";
  }
}


 function closeNavbar() {
        const navbarCollapse = document.getElementById("navbarNav");
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false
        });
        bsCollapse.hide();
      }
