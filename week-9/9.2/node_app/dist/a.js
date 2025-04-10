"use strict";
let x = 1;
// x = "sahil";
console.log(x);
function greet(firstName) {
    console.log("Hello " + firstName);
}
greet("harkirat");
function func(fn) {
    setTimeout(fn, 1000);
}
let user = {
    name: "Sahil",
    age: 29,
};
function isLegal(user) {
    if (user.age < 18) {
        return false;
    }
    else if (user.age >= 18) {
        return true;
    }
    return false; // Default return statement
}
