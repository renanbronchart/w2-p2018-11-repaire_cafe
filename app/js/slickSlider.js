const slickSlider = (() => {
  const slick = require('slick-carousel').slick;

  const init = () => {
    initSliders();
  };

  var initSliders = () => {
    $('.section__slider').each(function() {
      const $this = $(this);
      const $sliderHeader = $this.find('.slider__header');
      const $sliderContent = $this.find('.slider__content');

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

  return {init};
})();

slickSlider.init();
