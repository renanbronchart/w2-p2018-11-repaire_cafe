var disabledButtons = function() {
  var init = function() {
    $(document).on('click', '[disabled="disabled"]', function() {
      return false;
    })
  };

  return {init: init};
}();

disabledButtons.init();
