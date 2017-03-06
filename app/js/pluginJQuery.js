var pluginsJquery = {
  init: function () {
    this.newPlugins();
  },

  newPlugins: function () {
    $.fn.setHeightBlock = function() {
      var $this = $(this),
            heightBlocks = [];

      $this.css('height', 'auto');

      $this.each( function() {
        var heightBlock = $(this).outerHeight();

        heightBlocks.push(heightBlock);
      });

      console.log(heightBlocks);

      var maxHeight = Math.max.apply(null, heightBlocks);

      $this.outerHeight(maxHeight);
    }
  }
}

pluginsJquery.init();

