document.addEventListener("DOMContentLoaded", function() {
  function listenForNavbarOverlap(samePageLinks) {
    for (i = 0; i < samePageLinks.length; i++ ) {
      var link = samePageLinks[i];
      var target = document.getElementById(link.targetId);
      if ( target ) {
        var navbarHeight = 55;
        var highlightClass = "underline";
        var start = target.offsetTop - navbarHeight;
        var end = target.offsetTop + target.offsetHeight - navbarHeight;
        if ( window.pageYOffset > start && window.pageYOffset <= end ) {
          link.element.classList.add(highlightClass);
        } else {
          link.element.classList.remove(highlightClass);
        }
      }
    }
  }

  function initializeNavbar() {
    var navbar = document.getElementById("main-navigation");
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

    var navbarLinks = document.querySelectorAll(".navbar-end a.navbar-item");  
    var samePageLinks = [];
    for ( var i = 0; i < navbarLinks.length; i++ ) {
      var link = navbarLinks[i];
      if ( link.attributes.href.value.substr(0, 1) == "#" ) {
        samePageLinks.push({
          element: link,
          targetId: link.attributes.href.value.substr(1) 
        });
      }
    }

    if ( samePageLinks.length > 0 ) {
      window.addEventListener("scroll", function(event) {
        listenForNavbarOverlap(samePageLinks);
      });
    }

    var headerSection = document.querySelector("[data-js-header-section]");
    if ( headerSection ) {
      var breakpoint = headerSection.offsetHeight - 60;
      var revealed = false;
      var fixClass = "fix";
      var slideClass = "slide-out";

      window.addEventListener("scroll", function(event) {
        if ( window.pageYOffset >= breakpoint ) {
          navbar.classList.add(fixClass);
          revealed = true;
        } else if ( window.pageYOffset < breakpoint && revealed ) {
          navbar.classList.add(slideClass);
          navbar.classList.remove(fixClass);
          setTimeout(function() { 
            navbar.classList.remove(slideClass); 
            revealed = false;
          }, 150);
        } else {
          navbar.classList.remove(fixClass);
          revealed = false;
        }
      });
    }
  }

  function wrapContentImagesInFigure() {
    var images = document.querySelectorAll(".project--content > p > img")
    images.forEach(function(el) {
      var figure = document.createElement("figure");
      el.parentNode.insertBefore(figure, el);
      figure.appendChild(el);
    });
  }

  function scrollTo(element) {
    var top = element.offsetTop - 50;
    window.scroll({ top: top, behavior: "smooth" });
  }

  function initScrollToggles() {
    var toggles = document.querySelectorAll("[data-js-scroll-to-target]");
    toggles.forEach(function(el) {
      el.addEventListener("click", function(event) {
        var href = el.attributes.href.value
        var scrollTargetId = href.substr(1, href.length);
        var scrollTarget = document.getElementById(scrollTargetId);
        if ( scrollTarget ) {
          event.preventDefault();
          scrollTo(scrollTarget);
        }
      });
    });
  }

  function makeContactFormToggleable() {
    var modalContainer = document.getElementById("contact-modal-container");
    var toggle = document.getElementById("contact-modal-toggle");
    var closeToggles = document.querySelectorAll("[data-js-modal-close]");
    var showClass = "is-active";
    var contactSection = document.getElementById("contact");
    var toggleContact = function(event) {
      event.preventDefault();
      if ( contactSection ) {
        scrollTo(contactSection);
      } else {
        modalContainer.classList.add(showClass); 
      }
    }

    toggle.addEventListener("click", function(event) {
      toggleContact(event);
    });

    closeToggles.forEach(function(el) {
      el.addEventListener("click", function(event) {
        toggleContact(event);
      });
    });
  }

  function initContactForm() {
    var inputs = document.querySelectorAll(
      ".contact--form input, .contact--form textarea"
    );
    inputs.forEach(function(el) {
      el.addEventListener("keyup", function(event) {
        if ( el.value === "" ) {
          el.classList.remove("has-content");
        } else {
          el.classList.add("has-content")
        }
      });
    });
  }

  initializeNavbar();
  wrapContentImagesInFigure();
  makeContactFormToggleable();
  initContactForm();
  initScrollToggles();
});