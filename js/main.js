document.addEventListener("DOMContentLoaded", function() {
  function initializeNavbar() {
    var mobileNavCheckbox = document.getElementById("mobile-nav-checkbox");
    var mobileNavToggle = document.getElementById("mobile-nav-toggle");
    mobileNavToggle.addEventListener("click", function(event) {
      event.preventDefault();
      if ( mobileNavCheckbox.checked ) {
        mobileNavCheckbox.checked = false;
        mobileNavToggle.classList.remove("is-active");
      } else {
        mobileNavCheckbox.checked = true;
        mobileNavToggle.classList.add("is-active");
      }
    });    
  }

  function wrapContentImagesInFigure() {
    var images = document.querySelectorAll(".project--content > p > img")
    images.forEach(function(el) {
      var figure = document.createElement("figure");
      el.parentNode.insertBefore(figure, el);
      figure.appendChild(el);
    });
  }

  initializeNavbar();
  wrapContentImagesInFigure();
});