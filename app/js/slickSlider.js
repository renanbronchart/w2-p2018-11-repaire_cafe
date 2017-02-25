var slickSlider = function() {
  var init = function() {
    initSliderNews();
  };

  var initSliderNews = function() {
    $('.slider__header').slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      arrows: false,
      centerMode: true,
      focusOnSelect: false,
      asNavFor: '.slider__content',
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });

    $('.slider__content').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider__header',
      swipeToSlide: true,
      dots: false,
      arrows: false,
      centerMode: true,
      focusOnSelect: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  };

  return {init: init};
}();

slickSlider.init();
