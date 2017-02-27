var menu = function () {
    var init = function () {
        $('.burger').click(function () {
            $('.nav').toggleClass('active');
            $(this).toggleClass('open');
        });
    };
    var toggleNavList = function () {
        $('.nav__button').click(function (e) {
            e.preventDefault();
            $(this).next('.nav__lists').toggle();
        })
    };
    return {init: init, toggleNavList: toggleNavList}
}();

menu.init();
menu.toggleNavList();
