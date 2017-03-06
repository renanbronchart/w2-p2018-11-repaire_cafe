const pluginsJquery = {
  init() {
    this.newPlugins();
  },

  newPlugins() {
    $.fn.setHeightBlock = function() {
      const $this = $(this);
      const heightBlocks = [];

      $this.css('height', 'auto');

      $this.each(() => {
        const heightBlock = $(this).outerHeight();

        heightBlocks.push(heightBlock);
      });

      const maxHeight = Math.max.apply(null, heightBlocks);

      $this.outerHeight(maxHeight);
    }
  }
}

pluginsJquery.init();

