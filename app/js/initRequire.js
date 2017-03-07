var initRequire = function initRequire() {
  var init = function() {
    setTimeout(function() {
      $('.body__container').addClass('body__container--active');

      require('./pluginJQuery.js');
      require('./slickSlider.js');

      require('./disabledButtons.js');

      require('./rules.js');
      require('./buttonNavigation.js');
      require('./modal.js');
      require('./menu.js');
      require('./smothScroll.js');
    }, 500);
  }

  return {init: init};
}();

initRequire.init();
