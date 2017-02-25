var slickSlider = function() {
  var init = function() {
    initSliderNews();
  };

  var initSliderNews = function() {
    $('.section__slider').each(function() {
      var $this = $(this);
      var $sliderHeader = $this.find('.slider__header');
      var $sliderContent = $this.find('.slider__content');

      $sliderHeader.slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        focusOnSelect: false,
        asNavFor: $sliderContent,
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

      $sliderContent.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: $sliderHeader,
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
    })
  };

  return {init: init};
}();

slickSlider.init();
