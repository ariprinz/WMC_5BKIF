# Conceptual Questions


## Q1. What is the difference between `let`, `const` in JavaScript?

With `let` you can change the declared variable however you want with `const` the variable stays constant.

<br>

## Q2. What is the difference between `==` and `===` in JavaScript?

`==` checks if the right and left side are the same but it's not sensitive to the type. `===` also compairs the type.

for example:

`"1" == 1`
is true

`"1" === 1`
is false

<br>

## Q3. What is the difference between `null` and `undefined` in JavaScript?

`null` is like a value you can assign to a variable whereas undefined means that a variable has not yet been defined or initialized.

<br>

## Q4. What data types exist in JavaScript?

JavaScript has 7 primitive types: 
- `string`
- `number`
- `boolean`
- `undefined`
- `null`
- `bigint`
- `symbol`

Everything else in JavaScript is a refernce type (objects) for example:
- Arrays
- Functions
- Dates
- RegExp
- etc.

<br>

## Q5. How to check the type of a variable in JavaScript?

You can check with `typeof ...`.

<br>

## Q6. What are primitive data types in JavaScript?

They are simple single values. It's data that has no methods or properties and which are immutable (they cannot be alterd). This means they can not be changed in the way that objects can like arrays and functions can be altered.

example:

```js
let a = 5;
let b = a; 
b = 10;
```

`b` is now `10` and `a` is still `5`.

<br>

## Q7. What is an `object` in JavaScript?

Objects are the refernce types like arrays or functions and they are mutable so you can change their contents after creation.

example:

```js
let obj1 = {value: 5};
let obj2 = obj1;
obj2.value = 10;
```

Both `obj1` and `obj2` are now `10`.

<br>

## Q8. How to create an `object` in JavaScript?

There are two main ways to creat an object.

1. If you just need one object, use {}:

```js
const person = {
    name: "Ari",
    age: 27,
    isStudent: true
};
```

2. If you need many objects of the same shape, use a class: 

```js
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const person1 = new Person ("Ari", 27);
```

<br>

## Q9 What is a `function` in JavaScript?

A function is a reusable block of code that performs a task. You define it once and can use it as many times as you want with different input (parameters) getting back different output (return values)

<br>

## Q10. How do you define a `function` in JavaScript?

There are different ways to define a function.

### Function declaration

With this method you can call it before it appears in the code and it will still work. (hoisting)

```js
function greet(name) {
    return "Hello, " + name;
}

greet("Ari");
```

When to use:
- It's a solid default for most "regular" functions
- You want the function available everywhere in the file even before it is defined.
- With a standaline, named utility function like `calculateTotal()` or `validateEmail()`.
- It's easier to debug.

### Arrow function
This is the modern and short version

```js
cont greet = (name) => {
    return "Hello, " + name;
};

// Or even shorter if it is a single expression
const greet = name => "Hello, " + name;
```
When to use:
- For short callbacks like `.map`, `.filter`, `forEach`
- In classes or timers when you need a correct `this`


### Function expression

Here you have to define the function before you call it. It's stored in a variable.

```js
const greet = function(name) {
    return "Hello, " + name;
}
```

When to use: 
- You want to control exactly when the function becomes available
- When you are conditionally assigning a function with if (but it is less common since arrow functions are better for this)

<br>

## Q11. Can a function return `undefined`? If so, how?

Yes every function returns undefined unless you explicitly tell it what to return so if you don't write a return statement it will return undefined.

<br>

## Q12. What is `NaN` in JavaScript?

`NaN` = Not a Number. It shows up when a math operation does not produce a valid number. For example if you try to multiply a string and a number.

<br>

## Q13. How to convert a `string` to a `number` in JavaScript?

There are three ways to convert a string to a number

### Number()

With this option you can not convert a String with numbers and characters though

```js
Number("24")    // is 24

Number("24.3")  // is 24.3

Number("24px")    // is NaN

// shorthand for Number
+"24"   // is 24
```

### parseInt()

This option stops at the first invalid character and can't do decimals

```js
parseInt("24px")    // is 24

parseInt("24.3")    // is 24
```

### parseFloat

This option can also deal with decimals

```js
parseFloat("24.3px")    // is 24.3
```

<br>

# Type System

## Q1. What is the difference between `dynamic` and `static` typing?

### dynamic typing (JavaScript)

The types are checked at runtime so if you say a variable is a number and later say the same variable is a string it is no problem to do so.

```js
let x = 5;
x = "hello"; // Totally fine, no error
```

### static typing (Java)

The types are checked at compile time so this is more strict and would produce an error instantly.

```js
let x: number = 5;
x = "hello"; // Error caught before running
```

<br>

## Q2. What is the difference between `weak` and `strong` typing?

### weak typing (JavaScript)

converts types automatically (also called type coercion)

```js
"5" + 5      // "55"  (number converted to string)
"5" - 1      // 4     (string converted to number)
"5" * "2"    // 10    (both converted to number)
```

### strong typing

throws error when types are mixed

<br>

## Q3. Why in JavaScript a `variable` can change types? Give an example.

It's because of the dynamic typing. In JavaScript a variable is just a name that point to a value. The name (variable) has no type of it's own only the value has a type.

```js
let x = 5;        // x points to a Number value
x = "hello";       // x now points to a String value
x = true;          // x now points to a Boolean value
```

<br>

## Q4. Why in JavaScript an `expression` can change types? Give an example.

This is because of type coercion. Operators like +, -, == and if dont't require their operands to match in type. 

```js
let result = "5" + 3;
console.log(result);        // "8"? No — "53"
console.log(typeof result); // "string"
```

<br>

## Q5. What are the pros and cons of allowing `type coercion` in JavaScript?

### Pros

1. It's convient because you dont need explicit conversion functions everywhere

2. You can code more quickly, the code is more felixible and more forgiving

3. Things like adding a number to a string, checking array length in a boolean context, etc., "just works" without ceremony.

4. Because of type coercion values are categorizied in truthy and falsy values (falsy: false, 0, "", null, undefined and NaN) because of this we can easily check things like: 

```js
if (value) {
  // do something
}

// instead of
if (value !== null && value !== undefined && value !== "" && value !== 0) {
  // do something
}
```

### Cons

1. It can be unpredictable or have surprising results because coercion rules are not always intuitve like [] + [] = "". Or null == 0 being false

2. It can produce hidden bugs that are hard to trace like a typo or an unexpected input type. They can produca a wrong but valid result instead of an error. Which also increases the testing burden.

3. The loose == can lead to a lot of confusion like "" == 0 is true but "" == false is also true. This is why it is mostly recommended to use ===

4. Makes it harder to tell what type a value really is since coercion happens invisibly.

<br>

## Q6. Why might strong typing be preferred in `large-scale` applications?

1. It'a easier to catch bugs

2. Makes code safer to change because if you change a type in strongly typed languages the compiler tells you every single place in the codebase that it inconsistent

3. Better tooling and autocomplete which matters especially when more than one person edits the codebase.

4. Because of the functions signitures the code becomes self-documenting so another developer instantly knows what the function does. (zB. getUser)

<br>

# Type Coercion

## Q1. Explain what is happening when comparing `42 == "42"`?

JavaScript automatically converts 42 to a number so the result is true.

<br>

## Q2. Explain what is happening when comparing `42 === "42"`?

Because === is used JavaScript also compairs the types of the two values so the result is false.

<br>

## Q3. Explain what is happening when comparing `true == 1`?

The result is true because of type coercion the boolean true gets converted to the number 1.

<br>

## Q4. Explain what is happening when comparing `true === 1`?

Again since the operator === is used the types are also compaired which makes the result false.

<br>

## Q5. Explain what is happening when doing `(2+"2") + 2`?

Because the + operator has 2 uses (1 as a concatination and 2 as a mathematical symbol) and here it is used in combination with a string everything is automatically treated like a string so the result is 222

<br>

## Q6. Explain what is happening when doing `(2+"2") - 2`? 

The () part has the same explaination as above so the result inside of the parenthesies is (22) but since after that the next operator is a - and this only has one use which is the mathematical one the reuslt is 20.

<br>

## Q7. What is the output of the following examples?
  - `console.log(null + 1)`
  - `console.log("5" * 2)`
  - `console.log(true + false)`

`console.log(null + 1)` produces the output 1 since null in combination with a number is coerced to 0.

`console.log("5" * 2)` produces the output 10 since a String in combination with a number (and without a +) is coerced to a number.

`console.log(true + false)` produces the output 1 since booleans in combination with a + get coerced into numbers and true = 1 and false = 0. 

<br>

# Type Conversion

## Q1. How to convert a `string` to a `number`?

There are three ways to convert a string to a number

### Number()

With this option you can not convert a String with numbers and characters though

```js
Number("24")    // is 24

Number("24.3")  // is 24.3

Number("24px")    // is NaN

// shorthand for Number
+"24"   // is 24
```

### parseInt()

This option stops at the first invalid character and can't do decimals

```js
parseInt("24px")    // is 24

parseInt("24.3")    // is 24
```

### parseFloat

This option can also deal with decimals

```js
parseFloat("24.3px")    // is 24.3
```

<br>

## Q2. How to convert a `number` to a `string`?

There are two main ways

### String () or ().toString()

```js
parseString(24)       // "24"
String(24.3)     // "24.3"

(24).toString()      // "24"
(24.3).toString()    // "24.3"
(255).toString(16)   // "ff" — can also specify a radix (base), e.g. hex
```

<br>

## Q3. How to convert a pixel value e.g. `255px` to a number?

With `parseFloat` or `parseInt`

<br>

## Q4. Prompt the user to enter a number and convert it to a number and log it to the console.

```js
let input = prompt("Enter a number:");
let num = Number(input);
console.log(num);
```