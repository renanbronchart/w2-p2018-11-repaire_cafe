var modal = function() {
  var $modal = $('#modal');
  var $body = $('body');

  var init = function() {
    $('.card').each(function() {
      var $this = $(this);
      var $buttonModal = $this.find('.card__openModal');
      var cardContent = {
        title: $this.find('.card__title').html(),
        subtitle: $this.find('.card__subtitle').html(),
        content: $this.find('.card__content').html()
      };

      $buttonModal.on('click', function() {
        $modal.find('.modal__title').html(cardContent.title);
        $modal.find('.modal__subtitle').html(cardContent.subtitle);
        $modal.find('.modal__body').html(cardContent.content);

        $body.addClass('body--noScroll');
        $modal.addClass('modal--active');

        closeModalKeyPress();
      })
    })

    $('.modal, .modal__close, .fa-close').on('click', function(e) {
      if(e.target == this) {
        closeModal();
      }
    });
  };

  var closeModal = function() {
    $modal.removeClass('modal--active');
    $body.removeClass('body--noScroll');
  };

  var closeModalKeyPress = function() {
    if ($('.modal--active').length) {
      $(document).on('keyup', function(e) {
        if (e.keyCode == 27) {
          closeModal();
        }
      })
    }
  };

  return {init: init};
}();

modal.init();
