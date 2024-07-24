console.log("Hello world")

// variables
let a = 5;
let b = 6; // block
console.log("Sum:", a + b)

var v = "my string"; // global
console.log(v)

function work(title) {
    console.log("working on", title)
}
work("OJET")

let arr = ["Aaryan", true, 56, 34];
arr.push("Arush");
arr.forEach(function (e) {
    console.log(e)
})
let f = () => console.log("arrow func")
f()
/* for(e of arr) {
    console.log(e)
} */

// spread operator
let array = [1, 2, 3];
let array2 = [4, 5, 6];

array = ['Aaryan', ...array2, ...array]
console.log(array);

