const pluginsJquery = {
  init: function () {
    this.newPlugins();
  },

  newPlugins: function () {
    $.fn.setHeightBlock = function() {
      const $this = $(this),
            heightBlocks = [];

      $this.css('height', 'auto');

      $(this).each(() => {
        const heightBlock = $(this).outerHeight();

        heightBlocks.push(heightBlock);
      });

      const maxHeight = Math.max.apply(null, heightBlocks);

      $this.outerHeight(maxHeight);
    }
  }
}

pluginsJquery.init();

