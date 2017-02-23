var rulesSection = function() {
  var init = function() {
    $('.cardRules').setHeightBlock();

    carousel();

    $(window).off('resize').on('resize', function () {
      $('.cardRules').setHeightBlock();

      $('.section__rules .section__body').animate({
        scrollLeft: 0
      }, 600);

      $('#navigation__CurrentSection').html('1');

      carousel();
    });
  };

  var carousel = function() {
    var pos = 0;
    var $cardRules = $('.cardRules');
    var cardLength = $cardRules.length;
    var offsetScroll;
    var positionPrevCard;
    var positionNextCard;

    $('.navigation__button.navigation__buttonNext').off('click').on('click', function() {
      if (cardLength > (pos + 1)) {
        offsetScroll = ($($cardRules[0]).offset()).left;
        pos += 1;
        positionNextCard = ($($cardRules[pos]).position()).left;

        $('.section__rules .section__body').animate({
          scrollLeft: (positionNextCard - offsetScroll)
        }, 800);

        $('#navigation__CurrentSection').html(pos + 1);
      }

      return false;
    });

    $('.navigation__button.navigation__buttonPrev').off('click').on('click', function() {
      if (pos > 0) {
        $('.navigation__buttonPrev').addClass('navigation__buttonActive');
        offsetScroll = ($($cardRules[0]).offset()).left;
        pos -= 1;
        positionPrevCard = ($($cardRules[pos]).position()).left;

        $('.section__rules .section__body').animate({
          scrollLeft: (positionPrevCard - offsetScroll)
        }, 800);
      }

      $('#navigation__CurrentSection').html(pos + 1);

      return false;
    });
  };

  return {init: init, carousel: carousel};
}();

rulesSection.init();
