require('../scss/style.scss');

// require jQuery in global
global.$ = require('jquery');

// Call file js
$(document).ready(function () {
  require('./pluginJQuery.js');
  require('./slickSlider.js');

  require('./disabledButtons.js');

  require('./rules.js');
  require('./buttonNavigation.js');
  require('./modal.js');
  require('./menu.js');
})
