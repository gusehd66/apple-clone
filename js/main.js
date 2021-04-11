window.onload = function () {
  let bandsSlide = document.querySelector(".bands_slide");
  let count = 0;

  function next() {
    if (count < 6) {
      ++count;
    } else {
      count = 0;
    }
    bandsSlide.style.marginLeft = -bandsSlide.children[0].width * count + "px";
  }

  function prev() {
    if (count > 0) {
      --count;
    } else {
      count = 6;
    }
    bandsSlide.style.marginLeft = -bandsSlide.children[0].width * count + "px";
  }

  for (let i = 0; i < bandsSlide.childElementCount; i++) {
    bandsSlide.children[i].addEventListener("click", function () {
      if ((event.target.x > 1200) || (event.target.x == 200)) {
        next();
      } else {
        prev();
      }
    })
  }
}
