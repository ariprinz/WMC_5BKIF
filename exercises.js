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