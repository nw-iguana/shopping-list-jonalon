// listen for submit event
function watchSubmit() {
  $('#js-shopping-list-form').submit(event => {
    event.preventDefualt();
    const listItem = $('#shopping-list-entry').val();

    $('.shopping-list').append(`
    <li>
    <span class="shopping-item">${listItem}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>
    `)
  });
}

// add item to shopping list

// check and uncheck items in shopping list

// delete items in shopping list