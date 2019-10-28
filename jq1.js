var name = "Window";
var alice = {
name: "Alice",
sayHi: function() {
alert(this.name + " says hi");
}
};
var bob = { name: "Bob" };

setTimeout(alice.sayHi.call(bob), 2000);
// Bob says hi, immediately
function sayHello () {
alert(alice.name + " says hello!");
}
var alice = { name: "Alice" };
alice.name.call(sayHello());

var x = 10;
var puzzle = function (amount) {
this.x += amount;
return this.x;
};

var result = 50 - puzzle(20);
// Q3 result = 20


// Q4 result = "Hi I am window"

// Q5 result = 20

// Q6 
var name = "Window";
var alice = {
name: "Alice",
sayHi: function() {
alert(this.name + " says hi");
}
};
var bob = { name: "Bob" };

setTimeout(alice.sayHi.bind(alice), 3000);