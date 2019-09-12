'use strict';

(function () {
  var galleryImage = document.querySelectorAll(".banner__gallery li");
  var galleryImageIndex = 0;
  var nextBtn = document.querySelector(".banner__btn--next");
  var previosBtn = document.querySelector(".banner__btn--previous");

  var onNextBtnClick = function (evt) {
    evt.preventDefault();
    galleryImage[galleryImageIndex].classList.remove("active");
    galleryImageIndex += 1;
    if (galleryImageIndex >= galleryImage.length) {
      galleryImageIndex = 0;
    };
    galleryImage[galleryImageIndex].classList.add("active");
  };
  var onPreviosBtnClick = function (evt) {
    evt.preventDefault();
    galleryImage[galleryImageIndex].classList.remove("active");
    galleryImageIndex -= 1;
    if (galleryImageIndex < 0) {
      galleryImageIndex = galleryImage.length - 1;
    };
    galleryImage[galleryImageIndex].classList.add("active");
  };

  nextBtn.addEventListener('click', onNextBtnClick);
  previosBtn.addEventListener('click', onPreviosBtnClick);
})();
