const todoForm = $("#todo-form");
const todoInput = $("#todo-input");
const todoList = $("div.list-group");

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAm8rkmnISmYUcPpiX_b5y9ULFTx9OSgFs",
  authDomain: "todo-list-862aa.firebaseapp.com",
  projectId: "todo-list-862aa",
  storageBucket: "todo-list-862aa.appspot.com",
  messagingSenderId: "1071662116907",
  appId: "1:1071662116907:web:1ab0d2cbbe573b7d967a6e",
  measurementId: "G-THR720XD9P",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the todos object in our database
const todoFirebaseRef = firebase.database().ref('/Todos')

todoForm.submit(function(event) {
  // This will stop the default behaviour/action
  // of the form when submitted (in this case, GET request to current url)
  // or (refreshing the page)
  event.preventDefault()

  // trim() will remove beginning and trailing spaces in a string
  // and it would also turn empty spaces into an empty string ""
  const task = todoInput.val().trim()

  // If the todo value is an empty string "", it is falsey and will not add another list item
  if (task) {
    // add an object representing the todo to the todos object in our database
    todoFirebaseRef.push({
      name: task,
      isComplete: false,
    })
  }

  // Reset the form after prepending to the list with either:
  this.reset() // DOM method
  todoInput.val("") // jQuery method
})

// The following will only add event listeners to elements that already
// exist in the DOM when it first loads because that's when this script 
// is run. When loading initially, there are no delete links on the page
$('.delete-link').on('click', function(event) {
  $(this).closest('button.list-group-item').remove()
})

// The second optional param to .on() is a css selector string to filter the 
// descendants of the selected elements that trigger the event
// The event handler doesn't get invoked unless the element that was clicked
// matches the selector. "this" refers to the delete-link that fired the event
$(todoList).on('click', '.delete-link', function(event) {
  // closest() will traverse up in the DOM and give us the first 
  // ancestor that matches the css selector

  // Everytime a child is added to the todo-list, we'll add a data-id attribute
  // with the key from the database
  // We can read the key from the button of the link to tell firebase
  // which todo object to delete
  const key = $(this).closest('button.list-group-item').data("id")
  todoFirebaseRef.child(key).remove()
}) 

$(todoList).on('click', '.mark-complete-link', function(event) {
  const key = $(this).closest('button.list-group-item').data("id")
  const todoRef = firebase.database().ref(`/Todos/${key}`)

  todoRef.once("value", function(record) { // once() reads a value of the todos/key
    // Update the todo object's complete status
    todoRef.update({
      isComplete: !record.val().isComplete
    })
  })
})

// When a task is added to firebase, append the task to the todo list
// The callback will run everytime the page first loads for every existing todo 
// in the database, and it also runs every time a new task is added
// The callback has access to a record of the child object in its param
// Access the record's key using record.key
// Access the record's values using record.val().keyName
todoFirebaseRef.on('child_added', function(record) {
  todoList.prepend(`
    <button data-id="${record.key}" type="button" class="d-flex justify-content-between list-group-item list-group-item-action" aria-current="true">
      <span>${record.val().name}</span>
      <small>
        <a href="#" class="mark-complete-link">Mark Complete</a>
        |
        <a href="#" class="delete-link">Delete</a>
      </small>
    </button>
  `)

  const isComplete = record.val().isComplete
  styleTodos(isComplete, record)
})

todoFirebaseRef.on('child_removed', function(record) {
  // Find the specific button with the data-id attribute of the id of the record
  // that was deleted. Here we use a css selector: button[attributeName=attributeValue]
  $(`button[data-id=${record.key}]`).remove()
})

todoFirebaseRef.on('child_changed', function(record) {
  const isComplete = record.val().isComplete
  styleTodos(isComplete, record)
})

function styleTodos(isComplete, record) {
  if (isComplete) {
    $(`button[data-id=${record.key}] a.mark-complete-link`) // selects the mark-complete-link
      .text('Mark Incomplete')
      .parent()
      .siblings()
      .css('color', 'red')
      .css('text-decoration', 'line-through')
  } else {
    $(`button[data-id=${record.key}] a.mark-complete-link`) // selects the mark-complete-link
      .text('Mark Complete')
      .parent()
      .siblings()
      .css('color', 'black')
      .css('text-decoration', 'none')
  }
}

