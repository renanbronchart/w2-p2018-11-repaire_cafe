var buttonNavigation = function() {
  var init = function() {
    $('.section__slider.section__news').each(function() {
      var $this = $(this);
      var $slickSlider = $this.find('.slick-slider');

      initNavigationNews($this);

      $slickSlider.on('afterChange', function() {
        initNavigationNews($this);
      });
    });
  }

  var initNavigationNews = function($this) {
    var $currentSlide = $this.find('.slider__content .slider__container.slick-current');
    var dataVideo = $currentSlide.find('.card').attr('data-video');
    var dataSource = $currentSlide.find('.card').attr('data-source');
    var $buttonVideo = $this.find('.navigation__buttonVideo');
    var $buttonSource = $this.find('.navigation__buttonSource');

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

  var addClassActive = function ($button, url) {
    $button.addClass('navigation__button--active');
    $button.removeAttr('disabled');
    if (url != 'undefined') {
      $button.attr('href', url);
    }
  };

  var removeClassActive = function ($button) {
    $button.removeClass('navigation__button--active');
    $button.attr('href', '').attr('disabled', true);
  };

  return {init: init, addClassActive: addClassActive, removeClassActive: removeClassActive};
}();

buttonNavigation.init();

module.exports = {
  buttonNavigation: buttonNavigation
}
