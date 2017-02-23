var rulesSection = function() {
  var init = function() {
    $('.cardRules').setHeightBlock();

    carousel();
  };

  var carousel = function() {
    var pos = 0;
    var $cardRules = $('.cardRules');
    var cardLength = $('.cardRules').length;

    console.log(cardLength);

    $('.navigation__button.navigation__buttonNext').on('click', function() {
      console.log(cardLength);
      console.log(pos);
      if (cardLength > (pos + 1)) {
        var positionNextCard;
        var offsetScroll = ($($('.cardRules')[0]).offset()).left;

        pos += 1;
        positionNextCard = ($($('.cardRules')[pos]).position()).left;

        $('.section__rules .section__body').animate({
          scrollLeft: (positionNextCard - offsetScroll)
        }, 800);

      }

      return false;
    })

    $('.navigation__button.navigation__buttonPrev').on('click', function() {
      if (pos > 0) {
        var positionPrevCard;
        var offsetScroll = ($($('.cardRules')[0]).offset()).left;


        pos -= 1;
        positionPrevCard = ($($('.cardRules')[pos]).position()).left;
        console.log(positionPrevCard);
        console.log(offsetScroll);
        console.log(positionPrevCard - offsetScroll);



        $('.section__rules .section__body').animate({
          scrollLeft: (positionPrevCard - offsetScroll)
        }, 800);
      }

      return false;
    })
  };

  return {init: init, carousel: carousel};
}();

rulesSection.init();
