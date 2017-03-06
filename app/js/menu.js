const menu = (() => {
  let idSetTimeout;

  const init = () => {
    $('.header__burger').on('click', function () {
      $('.lightbox').toggleClass('active');
      $('.navAside').toggleClass('active');
      $('body').toggleClass('body--noScroll');
      $(this).toggleClass('open');
    });

    $(window).on('resize', () => {
      clearTimeout(idSetTimeout);
      idSetTimeout = setTimeout(closeNavAside, 500);
    });

    toggleNavList();
  };

  var closeNavAside = () => {
    $('.lightbox.active').removeClass('active');
    $('.navAside.active').removeClass('active');
    $('.header__burger.open').removeClass('open');
    $('body').removeClass('body--noScroll');
  };

  var toggleNavList = () => {
    $('.navAside__button').click(function (e) {
      $(this).next('.navAside__lists').toggle();
      return false;
    })
  };

  return {init}
})();

menu.init();
