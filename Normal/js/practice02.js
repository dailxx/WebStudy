const banner = document.getElementById("banner");
const carousel = banner.getElementsByTagName("a");
const dots = banner.getElementsByClassName("dots")[0].getElementsByTagName("div");
const count = carousel.length;
const interval = 3000;

let timer = null;
let currentIdx = 0;

function startAutoPlay(interval) {
  timer = setInterval(function() {
    gotoImage(++currentIdx);
  }, interval);
}

function stopAutoPlay() {
  if (timer) {
    clearInterval(timer);
  }
}

function gotoImage(idx) {
  if (idx < 0) {
    idx = count - 1;
  } else if (idx > count - 1) {
    idx = 0;
  }
  currentIdx = idx;
  for (let i = 0; i < carousel.length; i++) {
    let pic = carousel[i].getElementsByTagName("div")[0];
    if (idx === i) {
      pic.classList.add("banner-active");
    } else {
      pic.classList.remove("banner-active");
    }
  }

  for (let i = 0; i < dots.length; i++) {
    let dot = dots[i];
    if (idx === i) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  }
}

function gotoPrev() {
  gotoImage(--currentIdx);
}

function gotoNext() {
  gotoImage(++currentIdx);
}

(function slideImage() {
  var main = document.getElementById("main");
  main.onmouseover = function() {
    stopAutoPlay();
  }
  main.onmouseout = function() {
    startAutoPlay(interval);
  }

  for (let i = 0; i < dots.length; i++) {
    let dot = dots[i];
    dot.onclick = function() {
      gotoImage(i);
    };
  }
})()
