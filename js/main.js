window.onload = function () {
  let bandsSlide = document.querySelector(".bands_slide");
  let menuBtn = document.querySelector(".menu");
  let subMenu = document.querySelector(".sub");
  let sec2 = document.querySelector(".two");
  let sec3 = document.querySelector(".three");
  let sec5 = document.querySelector(".five");
  let sec7 = document.querySelector(".seven");

  let count = 0;
  let sectionY = [0, sec2.offsetTop, sec3.offsetTop, sec5.offsetTop, sec7.offsetTop];

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

  menuBtn.children[0].addEventListener("click", () => {
    subMenu.classList.toggle("active");
  });

  for (let m = 0; m < subMenu.childElementCount; m++) {
    subMenu.children[m].addEventListener("click", () => {
      window.scrollTo({
        behavior: 'smooth',
        top: sectionY[m]
        //섹션 별로 y 값을 읽어서 이동하게 만들기
      })
    })
  }
}
