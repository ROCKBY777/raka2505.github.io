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
  const themeToggleBtn = document.getElementById("theme-toggle");

  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Change button text based on current theme
    if (document.body.classList.contains("dark-mode")) {
      themeToggleBtn.textContent = "Light Mode";
      themeToggleBtn.classList.remove("btn-outline-dark");
      themeToggleBtn.classList.add("btn-outline-light");
    } else {
      themeToggleBtn.textContent = "Dark Mode";
      themeToggleBtn.classList.remove("btn-outline-light");
      themeToggleBtn.classList.add("btn-outline-dark");
    }
  });
