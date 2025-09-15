function sayHello(name) {
  console.log("Hello " + name);
}

sayHello("Tom"); // "Hello Tom"
sayHello(); // "Hello undefined"
sayHello(34, "Hello", true, 0); // "Hello 34"

function totalPrice(priceUnit, units) {
  return priceUnit * units;
}

let total = totalPrice(5.95, 6);
console.log(total); // 35.7

console.log(typeof totalPrice); // function
let totalPrice2 = totalPrice;
console.log(totalPrice2(34, 7));


let sumar = function(num1, num2) {
    return num1 + num2;
}
console.log(sumar(12,5)); // 17

let sumar2 = (num1, num2) => num1 + num2;
console.log(sumar2(12,5)); // 17

let square = num => num * num;
console.log(square(3)); // 9


function sayHello(name) {
    name = name ?? "Anonymous";
    console.log("Hello! I'm " + name);
}

// sayHello(0);

function sayHello2(name = "Anonymous") {
    console.log("Hello! I'm " + name);
}
sayHello2(); // Hello! I'm Anonymous 
sayHello2("Peter"); // Hello! I'm Peter

function sayHello3(name) {
    name = name || "Anonymous";
    console.log("Hello! I'm " + name);
}

sayHello3(); // Hello! I'm Anonymous 
sayHello3("Peter"); // Hello! I'm Peter


