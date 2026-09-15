//Strings


//E1

let name = "Ari";
let greetingE1 = "Hello, my name is " + name;

console.log(greetingE1);


//E2

let greetingE2 = `Hello, my name is ${name}`;

console.log(greetingE2);


//E3

let exotic = "Esperanto estas ekzotika lingvo"

console.log(exotic)
console.log(exotic.length);



//Functions


//E1

function greet(name) {
    if (typeof name === "string") {
        return `Hello, my name is ${name}`;
    } 
    
    else {
        return null;
    }
}

console.log(greet("John"));
console.log(greet(25));


//E2

function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else {
        return null;
    }
}

console.log(add(5,3));
console.log(add("5", "3"));


//E3

function subtract(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 - num2;
    }
    else {
        return null;
    }
}

console.log(subtract(5,3));
console.log(subtract("5", "3"));