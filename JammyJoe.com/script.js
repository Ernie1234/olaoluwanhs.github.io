function select(indentifier) {
  var select = document.querySelector(indentifier);
  return select;
}
function selects(indentifier) {
  var select = document.querySelectorAll(indentifier);
  return select;
}

function loadText(section) {
  var sectionText;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", section, true);
  xhr.onload = function () {
    if (xhr.status == 200 && this.readyState == 4) {
      var changeHtml = select(".below>.service-display");
      changeHtml.innerHTML = xhr.responseText;
    }
  };
  xhr.onerror = function () {
    var changeHtml = select(".below>.service-display");
    changeHtml.innerHTML =
      "<p style='color:white;'>There is an error loading this section check your connection</p>";
  };

  xhr.send();
}

window.addEventListener("load", function () {
  loadText("https://olaoluwanhs.github.io/JammyJoe.com/txts/About us.txt");
});

// loadText("txts/reels.txt");
var navLinks = document.documentElement.querySelectorAll(
  ".service-options>span"
);
navLinks[0].addEventListener("click", function () {
  loadText("https://olaoluwanhs.github.io/JammyJoe.com/txts/About us.txt");
  changeSectionAnim();
});
navLinks[1].addEventListener("click", function () {
  loadText("https://olaoluwanhs.github.io/JammyJoe.com/txts/Services.txt");
});
navLinks[2].addEventListener("click", function () {
  loadText("https://olaoluwanhs.github.io/JammyJoe.com/txts/reels.txt");
});
navLinks[3].addEventListener("click", function () {
  loadText("https://olaoluwanhs.github.io/JammyJoe.com/txts/contact-page.txt");
});
var coverAnim = document.documentElement.querySelector(".cover-anim");

function changeSectionAnim() {
  if (coverAnim.id == "cover-anim-pos") {
    coverAnim.id = "";
  } else {
    coverAnim.id = "cover-anim-pos";
  }
}

var slider = document.querySelector(".slider-container>.hero-slider");
var count = 1;
setInterval(function () {
  slider.style.transition = "2s";
  slider.style.transform = "translateX(" + count * -100 + "vw)";
  count++;

  slider.addEventListener("transitionend", function () {
    if (count == 5) {
      slider.style.transition = "none";
      slider.style.transform = "translateX(0vw)";
      count = 1;
    }
  });
}, 5000);
