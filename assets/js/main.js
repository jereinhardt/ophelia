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
    var regex = /^(\/.*)#(.*)/;

    for ( var i = 0; i < navbarLinks.length; i++ ) {
      var link = navbarLinks[i];
      var matches = link.attributes.href.value.match(regex);
      if ( matches && matches[1] == window.location.pathname ) {
        samePageLinks.push({
          element: link,
          targetId: matches[2]
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

      var regex = /^(\/.*)#(.*)/;
      var matches = el.attributes.href.value.match(regex);
      if ( 
        ( matches && window.location.pathname == matches[1] ) ||
        el.attributes.href.value.substr(0, 1) == "#"
      ) {
        el.addEventListener("click", function(event) {
          var scrollTargetId;
          if ( matches ) {
            scrollTargetId = matches[2];
          } else {
            scrollTargetId = el.attributes.href.value.substr(1);
          }
          var scrollTarget = document.getElementById(scrollTargetId);
          
          if ( scrollTarget ) {
            event.preventDefault();
            scrollTo(scrollTarget);
          }
        });
      }
    });
  }

  function makeContactFormToggleable() {
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
  }

  function initContactForm() {
    var form = document.getElementById("contact-form");
    if ( form ) {
      initContactFormValidation()
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
  }

  function initContactFormValidation() {
    var form = document.getElementById("contact-form");
    var validateIsPresent = function(field) {
      var input = field.querySelector("[data-js-input]")
      return input.value != "";
    }
    var validateIsEmail = function(field) {
      var input = field.querySelector("[data-js-input]")
      var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(input.value.toLowerCase());
    }
    validations = {
      "present": validateIsPresent,
      "email": validateIsEmail
    };
    form.addEventListener("submit", function(event) {
      var fields = form.querySelectorAll("[data-js-validate]");
      var invalidFields = [];
      for (var i = 0; i < fields.length; i++) {
        var field = fields[i];
        var validation = field.dataset.jsValidate;
        if ( !validations[validation](field) ) {
          invalidFields.push(field);
        }
      }
      if ( invalidFields.length > 0 ) {
        event.preventDefault();
        for (var i = 0; i < fields.length; i++) {
          var field = fields[i];
          field.querySelector("[data-js-input]").classList.remove("is-warning");
          field.querySelector("[data-js-warning]").classList.add("hidden");
        }
        for (var i = 0; i < invalidFields.length; i++) {
          var field = invalidFields[i];
          field.querySelector("[data-js-input]").classList.add("is-warning");
          field.querySelector("[data-js-warning]").classList.remove("hidden");
        }
      }
    });
  }

  initializeNavbar();
  wrapContentImagesInFigure();
  makeContactFormToggleable();
  initContactForm();
  initScrollToggles();
});