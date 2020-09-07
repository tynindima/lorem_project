$(document).ready(() => {
  $(`#header-btn-menu`).on(`click`, () => {
    $(`#header-navbarNav`).collapse(`toggle`);
  });

  for (let i = 1; i <= 5; i++) {
    $(`#sort-bd-${i}`).on(`click`, () => {
      $(`.sort-bd__item`).removeClass(`active`);
      $(`#sort-bd-${i}`).addClass(`active`);
    });
  }

  $(`#body-sort-btn`).on(`click`, () => {
    $(`#body-sortbar`).collapse(`toggle`);
  });

  // eslint-disable-next-line no-console
  console.log(`document ready`);
});
