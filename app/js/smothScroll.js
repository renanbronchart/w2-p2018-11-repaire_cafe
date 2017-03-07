var smothScroll = function() {
  var init = function() {
    $('a[href^="#"]').click(function() {
      var idItem = $(this).attr("href");

      $('html, body').animate({
        scrollTop: $(idItem).offset().top
      }, 'slow');

      return false;
    });
  }

  return {init: init};
}();

smothScroll.init();
