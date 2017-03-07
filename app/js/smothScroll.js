var smothScroll = function() {
  var init = function() {
    $('a[href^="#"]').click(function() {
      var idItem = $(this).attr("href");
      var $section = $(idItem);

      $('html, body').animate({
        scrollTop: $section.offset().top
      }, 'slow');

      $section.find('a').focus();

      return false;
    });
  }

  return {init: init};
}();

smothScroll.init();
