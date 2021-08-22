const todoForm = $("#todo-form");
const todoInput = $("#todo-input");
const todoList = $("div.list-group");

todoForm.submit(function (event) {
  // This will stop the default behaviour/action
  // of the form when submitted (in this case, GET request to current url)
  // or (refreshing the page)
  event.preventDefault();

  // trim() will remove beginning and trailing spaces in a string
  // and it would also turn empty spaces into an empty string ""
  const task = todoInput.val().trim();

  // Make each button a flex parent using "d-flex" and "justify-content-between" classes
  // to space out the flex items (<span> and <small>)
  if (task) {
    todoList.prepend(`
      <button type="button" class="d-flex justify-content-between list-group-item list-group-item-action" aria-current="true">
        <span>${task}</span>
        <small>
          <a href="#" data-is-complete="false" class="mark-complete-link">Mark Complete</a>
          |
          <a href="#" class="delete-link">Delete</a>
        </small>
      </button>
    `);
  }

  // Reset the form after prepending to the list with either:
  this.reset(); // DOM method
  todoInput.val(""); // jQuery method
});

// The following will only add event listeners to elements that already
// exist in the DOM when the DOM first loads because that's when this script
// is run. When loading initially, there are no delete links on the page
$(".delete-link").on("click", function (event) {
  $(this).closest("button.list-group-item").remove();
});

// The second optional param to .on() is a css selector string to filter the
// descendants of the selected elements that trigger the event
// The event handler doesn't get invoked unless the element that was clicked
// matches the selector. "this" refers to the delete-link that fired the event
$(todoList).on("click", ".delete-link", function (event) {
  // closest() will traverse up in the DOM and give us the first
  // ancestor that matches the css selector
  $(this).closest("button.list-group-item").remove();
});

$(todoList).on("click", ".mark-complete-link", function (event) {
  const isComplete = $(this).data("is-complete");

  if (isComplete) {
    $(this)
      .data("is-complete", false)
      .text("Mark Complete")
      .parent() // <small>
      .siblings() // <span>
      .css("text-decoration", "none")
      .css("color", "black");
  } else {
    $(this)
      .data("is-complete", true)
      .text("Mark Incomplete")
      .parent() // <small>
      .siblings() // <span>
      .css("text-decoration", "line-through")
      .css("color", "red");
  }
});
