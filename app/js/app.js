require('../scss/style.scss');

// require jQuery in global
global.$ = require('jquery');

// Call file js
$(document).ready(function () {
  setTimeout(function() {
    $('.body__container').addClass('body__container--active');

    require('./pluginJQuery.js');
    require('./slickSlider.js');

    require('./disabledButtons.js');

    require('./rules.js');
    require('./buttonNavigation.js');
    require('./modal.js');
    require('./menu.js');
  }, 500);

  setTimeout(function () {
    $('.body__loading').addClass('body__loading--animation');
    $('body').removeClass('noScroll');
  }, 2000);
})
