var rulesSection = function() {
  var buttonNavigation = require('./buttonNavigation.js').buttonNavigation;
  var $navigationButtonNext = $('.section__rules .navigation__buttonNext');
  var $navigationButtonPrev = $('.section__rules .navigation__buttonPrev');

  var $cardRules = $('.section__rules .card');
  var cardLength = $cardRules.length;
  var offsetScroll;
  var positionPrevCard;
  var positionNextCard;

  var init = function() {
    var $cardRules = $('.section__rules .card');

    if ($(window).width() < 1280) {
      $cardRules.setHeightBlock();
      carousel();
    }

    $(window).on('resize', function () {
      if ($(this).width() < 1280 ) {
        $cardRules.setHeightBlock();

        $('.section__rules .section__body').animate({
          scrollLeft: 0
        }, 600);

        $('#navigation__CurrentSection').html('1');
        buttonNavigation.addClassActive($navigationButtonPrev);
        buttonNavigation.removeClassActive($navigationButtonPrev);

        carousel();
      } else {
        $cardRules.css('height', 'auto');
      }
    });
  };

  var carousel = function() {
    var pos = 0;

    $('.navigation__button.navigation__buttonNext').off('click').on('click', function() {
      if (cardLength > (pos + 1)) {
        offsetScroll = ($($cardRules[0]).offset()).left;
        pos += 1;
        positionNextCard = ($($cardRules[pos]).position()).left;

        $('.section__rules .section__body').animate({
          scrollLeft: (positionNextCard - offsetScroll)
        }, 800, function() {

        });

        $('#navigation__CurrentSection').html(pos + 1);
        buttonNavigation.addClassActive($navigationButtonPrev);

        if (pos == ($cardRules.length - 1)) {
          buttonNavigation.removeClassActive($navigationButtonNext);
        }
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

        buttonNavigation.addClassActive($navigationButtonNext);
        if (pos == 0) {
          buttonNavigation.removeClassActive($navigationButtonPrev);
        }
      }

      $('#navigation__CurrentSection').html(pos + 1);

      return false;
    });
  };

  return {init: init, carousel: carousel};
}();

rulesSection.init();
