var rulesSection = function() {
  var init = function() {
    $('.cardRules').setHeightBlock();

    carousel();
  };

  var carousel = function() {
    var pos = 0;
    var $cardRules = $('.card__rules');

    $('.navigation__button.navigation__buttonNext').on('click', function() {
      var positionNextCard;
      var offsetScroll = ($($('.cardRules')[0]).offset()).left;

      pos += 1;
      positionNextCard = ($($('.cardRules')[pos]).position()).left;

      console.log(positionNextCard);
      console.log(offsetScroll);
      console.log(positionNextCard - offsetScroll);

      $('.section__rules .section__body').animate({
        scrollLeft: (positionNextCard - offsetScroll)
      }, 800);

      return false;
    })
  };

  return {init: init, carousel: carousel};
}();

rulesSection.init();
