const initRequire = function initRequire() {
  const init = () => {
    setTimeout(() => {
      $('.body__container').addClass('body__container--active');

      require('./pluginJQuery.js');
      require('./slickSlider.js');

      require('./disabledButtons.js');

      require('./rules.js');
      require('./buttonNavigation.js');
      require('./modal.js');
      require('./menu.js');
    }, 500);
  };

  return {init};
}();

initRequire.init();
