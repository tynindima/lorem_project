$(document).ready(() => {
  $(`#header-btn-menu`).on(`click`, () => {
    $(`#navbarNav`).collapse(`toggle`);
  });

  // eslint-disable-next-line no-console
  console.log(`document ready`);
});
