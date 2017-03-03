var menu = function () {
  var init = function () {
    $('.header__burger').click(function () {
      $('.lightbox').toggleClass('active');
      $('.navAside').toggleClass('active');
      $(this).toggleClass('open');
    });
    toggleNavList();
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
