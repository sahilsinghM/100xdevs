let x: number = 1;
// x = "sahil";
console.log(x);

function greet(firstName: string) {
  console.log("Hello " + firstName);
}

greet("harkirat");

function func(fn: () => void): void {
  setTimeout(fn, 1000);
}

interface User {
  name: string;
  age: number;
  surname: string;
}
// you define a interface to define type explicit
// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
// :User to conform with the interface
let user: User = {
  name: "Sahil",
  age: 29,
  surname: "singh",
};

const isLegal = (user: User): boolean => {
  if (user.age < 18) {
    return false;
  } else if (user.age >= 18) {
    return true;
  }
  return false; // Default return statement
};

// composite types
