const pageLoading = (() => {
  const init = () => {
    const $bodyLoading = $('.body__loading');

    setTimeout(() => {
      $bodyLoading.addClass('body__loading--animation');
      $('body').removeClass('body--noScroll');
    }, 2000);

    setTimeout(() => {
      $bodyLoading.remove();
    }, 2500);
  };

  return {init};
})();

pageLoading.init();
