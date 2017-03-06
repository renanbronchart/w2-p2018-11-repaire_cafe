const buttonNavigation = (() => {
  const init = () => {
    $('.section__slider.section__news').each(function() {
      const $this = $(this);
      const $slickSlider = $this.find('.slick-slider');

      initNavigationNews($this);

      $slickSlider.on('afterChange', () => {
        initNavigationNews($this);
      });
    });
  };

  var initNavigationNews = $this => {
    const $currentSlide = $this.find('.slider__content .slider__container.slick-current');
    const dataVideo = $currentSlide.find('.card').attr('data-video');
    const dataSource = $currentSlide.find('.card').attr('data-source');
    const $buttonVideo = $this.find('.navigation__buttonVideo');
    const $buttonSource = $this.find('.navigation__buttonSource');

    if (dataVideo.length > 0) {
      addClassActive($buttonVideo, dataVideo);
    } else {
      removeClassActive($buttonVideo);
    }

    if (dataSource.length > 0) {
      addClassActive($buttonSource, dataSource);
    } else {
      removeClassActive($buttonSource);
    }
  };

  var addClassActive = ($button, url) => {
    $button.addClass('navigation__button--active');
    $button.removeAttr('disabled');
    if (url != 'undefined') {
      $button.attr('href', url);
    }
  };

  var removeClassActive = $button => {
    $button.removeClass('navigation__button--active');
    $button.attr('href', '').attr('disabled', true);
  };

  return {init, addClassActive, removeClassActive};
})();

buttonNavigation.init();

export default {
  buttonNavigation
};
