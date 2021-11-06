// ! show when scroll down
function Utils() {}
Utils.prototype = {
  constructor: Utils,
  isElementInView: function (element, fullyInView) {
    var pageTop = $(window).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var elementTop = $(element).offset().top;
    var elementBottom = elementTop + $(element).height();

    if (fullyInView === true) {
      return pageTop < elementTop && pageBottom > elementBottom;
    } else {
      return elementTop <= pageBottom && elementBottom >= pageTop;
    }
  },
};

var Utils = new Utils();
$(window).on("load", addFadeIn());

$(window).scroll(function () {
  addFadeIn(true);
});

function addFadeIn(repeat) {
  var classToFadeIn = ".project-card";
  $(classToFadeIn).each(function (index) {
    var isElementInView = Utils.isElementInView($(this), false);
    if (isElementInView) {
      if (!$(this).hasClass("fadeInRight") && !$(this).hasClass("fadeInLeft")) {
        if (index % 2 == 0) $(this).addClass("fadeInRight");
        else $(this).addClass("fadeInLeft");
      }
    } else if (repeat) {
      $(this).removeClass("fadeInRight");
      $(this).removeClass("fadeInLeft");
    }
  });
}

// ! animated navbar
const navbar = document.getElementById("navbar");
let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 80) {
    navbar.classList.remove("top");
    navbar.classList.add("white-txt");
    if (!scrolled) {
      navbar.style.transform = "translateY(-70px)";
    }
    setTimeout(function () {
      navbar.style.transform = "translateY(0)";
      scrolled = true;
    }, 200);
  } else {
    navbar.classList.add("top");
    navbar.classList.remove("white-txt");
    scrolled = false;
  }
};

// ! Smooth Scrolling
$("#con-btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    const contDiv = $(".section3-container");
    $("html, body").animate(
      {
        scrollTop: $(contDiv).offset().top,
      },
      800
    );
  }
});
