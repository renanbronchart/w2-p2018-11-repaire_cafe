require('../scss/style.scss');

// require jQuery in global
global.$ = require('jquery');

// Call file js
$(document).ready(function () {
  require('./pluginJQuery.js');


  require('./rules.js');
})
