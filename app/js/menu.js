var menu = function () {
  var init = function () {
    $('.burger').click(function () {
      $('.nav').toggleClass('active');
      $(this).toggleClass('open');
    });
  };
  var toggleNavList = function () {
    $('.nav__button').click(function (e) {
      $(this).next('.nav__lists').toggle();
      return false;
    })
  };

  toggleNavList();
  return {init: init, toggleNavList: toggleNavList}
}();

menu.init();
