const disabledButtons = (() => {
  const init = () => {
    $(document).on('click', '[disabled="disabled"]', () => false)
  };

  return {init};
})();

disabledButtons.init();
