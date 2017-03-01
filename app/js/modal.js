var modal = function() {
  var init = function() {
    var $modal = $('#modal');
    var $body = $('body');

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
      })
    })

    $('.modal, .modal__close, .fa-close').on('click', function(e) {
      if(e.target == this) {
        $modal.removeClass('modal--active');
        $body.removeClass('body--noScroll');
      }
    })

  };

  return {init: init};
}();

modal.init();
