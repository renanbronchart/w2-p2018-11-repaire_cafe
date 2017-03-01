require('../scss/style.scss');

// require jQuery in global
global.$ = require('jquery');

// Call file js
$(document).ready(function () {
  setTimeout(function() {
    $('.body__container').addClass('body__container--active');

    require('./initRequire.js');
  }, 500);

  require('./pageLoading.js');
})
