var menu = function () {
  var idSetTimeout;

  var init = function () {
    $('.header__burger').on('click', function () {
      $('.lightbox').toggleClass('active');
      $('.navAside').toggleClass('active');
      $('body').toggleClass('body--noScroll');
      $(this).toggleClass('open');
    });

    $(window).on('resize', function () {
      clearTimeout(idSetTimeout);
      idSetTimeout = setTimeout(closeNavAside, 500);
    });

    toggleNavList();
  };

  var closeNavAside = function() {
    $('.lightbox.active').removeClass('active');
    $('.navAside.active').removeClass('active');
    $('.header__burger.open').removeClass('open');
    $('body').removeClass('body--noScroll');
  };

  var toggleNavList = function () {
    $('.navAside__button').click(function (e) {
      $(this).next('.navAside__lists').toggle();
      return false;
    })
  };

  return {init: init}
}();

menu.init();
