const modal = (() => {
  const init = () => {
    const $modal = $('#modal');
    const $body = $('body');

    $('.card').each(function() {
      const $this = $(this);
      const $buttonModal = $this.find('.card__openModal');
      const cardContent = {
        title: $this.find('.card__title').html(),
        subtitle: $this.find('.card__subtitle').html(),
        content: $this.find('.card__content').html()
      };

      $buttonModal.on('click', () => {
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

  return {init};
})();

modal.init();
