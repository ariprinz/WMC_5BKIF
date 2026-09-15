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




//Objects


//E1

const person = {
    name: "Ari",
    age: 27,
    isStudent: true,
};

console.log(person);


//E2

const game = {
    playerName: "Ari",
    score: 99,
    rank: 24,
    isAlive: true,
    //E3
    updateScore: function(newScore) {
        this.score = newScore;
    },
    reset: function() {
        this.score = 0;
        this.rank = 0;
        this.isAlive = true;
    },
};

//E2 Test
console.log(game);

//E3 Test
console.log(game.updateScore(100));
console.log(game);
console.log(game.reset());
console.log(game);


//E4

function createPerson(name, age) {
    if (typeof name === "string" && typeof age === "number") {
        return {
            name: name,
            age: age,
        }
    }
    else {
        return null;
    }
}

console.log(createPerson("John", 25));
console.log(createPerson(25, "John"));