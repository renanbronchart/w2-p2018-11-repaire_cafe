require('../scss/style.scss');

// require jQuery in global
global.$ = require('jquery');
global.slick = require('slick-carousel');

// Call file js
$(document).ready(function () {
  require('./pluginJQuery.js');


  require('./rules.js');

   $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
})
