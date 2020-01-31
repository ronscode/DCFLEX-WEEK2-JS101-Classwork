// Hello, you!
// Write a function hello which given a name, says hello to the name. Use the following template:

// function hello(name) {
//   // put your code here
// }
// hello('Mustache');
// Make the above program print

// Hello, Mustache!

function hello(aName) {
  if (!aName) {
    console.log("Hello, World!")
  } else
    console.log("Hello, " + aName + "!");
}

hello('Mustache');

hello();