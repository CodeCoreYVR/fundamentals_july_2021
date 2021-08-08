// In the chrome console, "this" in the global scope is the window object (global object in the browswer)
this // -> window object
window.console === console // -> true
window.prompt === prompt // -> true

const can = {
  name: "Can Object",
  touchThis() {
    return this
  }
}

can.touchThis() // returns can object

// "this" will refer to something else if the method is separated from its object
// this is called the implicit binding of "this"
// the rule of thumb is that "this" will refer to the object to the left of the dot


const cant = {
  name: "Can't Object"
}

cant.touchThis = can.touchThis
cant.touchThis() // returns cant object

// We don't know what "this" is until we call it and "this" binds to the context
// When we define a function, it doesn't know what "param" is
// until we invoke it and pass it an argument
function someFunc(param) {
  console.log("param", param);
  console.log("this", this);
}

cant.someFunc = someFunc
cant.someFunc("Hello")
// param: "Hello"
// this: cant object

someFunc(500)
// param: 500
// this: global window object

const counter = {
  step: 1,
  count: 0,
  set(n) {
    this.count = n
  },
  inc() {
    return this.count += this.step
  },
  dec() {
    return this.count -= this.step
  },
  now() {
    return this.count
  },
  setStep(n) {
    this.step = n
  },
  reset() {
    this.count = 0
  },
}

counter.setStep(2)
counter.inc() // returns 2
counter.inc() // returns 4
counter.setStep(10)
counter.dec() // returns -6
counter.reset() // sets count to 0

// Stopping Exercise
const car = {
  doors: 4,
  speed: 30,
  park: function() {
    console.log("Parking...");
  },
  stop() {
    if (this.speed > 120) {
      console.log("Screeetch!!");
    } else if (this.speed > 80) {
      console.log("Rrrrch");
    } else if (this.speed > 0) {
      console.log("Shhh");
    } else {
      console.log("Yikes, I don't know how fast I'm going!!");
    }
  },
  stopStretch() {
    if(typeof this.speed === "number") {
      console.log(`Scr${"e".repeat(this.speed)}tch!!!`)
    }

    // or

    let repeatedE = ''
    for (let i = 0; i < this.speed; i++) {
      repeatedE += "e" // repeatedE = repeatedE + "e"
    }
    console.log(`Scr${repeatedE}tch!!!`)
  }
}
