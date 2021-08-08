// A method is a function that is a value of an object

const car = {
  doors: 4,
  speed: 300,
  park: function() {
    console.log("Parking...");
  },
  // ES6 Shorthand
  stop() {
    console.log("Stopping...")
  },
}

car.speed // -> 300
car["doors"] // -> 4
car.park // returns method definition
car.park() // -> "Parking..."
car["stop"]() // -> "Stopping..."