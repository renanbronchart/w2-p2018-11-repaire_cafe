var pageLoading = function() {
  var init = function() {
    var $bodyLoading = $('.body__loading');

    setTimeout(function () {
      $bodyLoading.addClass('body__loading--animation');
      $('body').removeClass('body--noScroll');
    }, 2000);

    setTimeout(function () {
      $bodyLoading.remove();
    }, 2500);
  }

  return {init: init};
}();

pageLoading.init();
