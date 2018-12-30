document.addEventListener("DOMContentLoaded", function() {
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
});