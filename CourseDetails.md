## Variables

Variables can be assigned values

    x = 5;
    y = "Five";
    z = false;

 - x is numeric 
 - y is a string 
 - z is boolean.  Boolean means true or false.

Variables can be declared without assigning a value.  If a value is not assigned the variable will have a value of **undefined**.

Variables can be added together just like algebra

    value1 = 5;
    value2 = 5;
    total = value1 + value2;

## Arrays
JavaScript arrays are used to store multiple values in a single variable.
An array is a special variable, which can hold more than one value at a time.

    var cars = ["Saab", "Volvo", "BMW"];

## What is the semicolon for?

In javascript the semicolon is used to end a statement but are not necessarily required.  There are lots of web pages expressing views on whether to use semicolons or not.  It's really up to you and either way will work but just make sure you are consistent.


## Comments in your code

The general rule is always put comments in your code.  The amount of comments depends on the complexity of the code but the general purpose is to give the next person making modifications to your code basic information about what a block of code is supposed to do.

## REPL

REPL stands for Read Eval Print Loop and it represents a computer environment like a Windows console or Unix/Linux shell where a command is entered and the system responds with an output in an interactive mode. Node.js or  **Node**  comes bundled with a REPL environment. It performs the following tasks −

-   **Read**  − Reads user's input, parses the input into JavaScript data-structure, and stores in memory.
    
-   **Eval**  − Takes and evaluates the data structure.
    
-   **Print**  − Prints the result.
    
-   **Loop**  − Loops the above command until the user presses  **ctrl-c**twice.
    

The REPL feature of Node is very useful in experimenting with Node.js codes and to debug JavaScript codes.

## Conditionals

**If statement**

    if (condition) {
        block of code to be executed if the condition is true
    }


**Else statement** 


    if (condition) {
        block of code to be executed if the condition is true
    } else { 
        block of code to be executed if the condition is false
    }


**Else IF statement**

    if (condition1) {
        block of code to be executed if condition1 is true
    } else if (condition2) {
        block of code to be executed if the condition1 is false and condition2 is true
    } else {
        block of code to be executed if the condition1 is false and condition2 is false
    }

## Loops

**For loop**

    for (i = 0; i < 5; i++) {
        text += "The number is " + i + "<br>";
    }

**While loop**


    while (i < 10) {
        text += "The number is " + i;
        i++;
    }

## Functions

Functions contain blocks of code that need to be executed repeatedly. Functions can take zero or more arguments, and can optionally return a value.

**Named Function**
var foo = function() { /* do something */ }

var greet = function(person, greeting) {
    var text = greeting + ', ' + person;
    console.log(text);
};
greet('Rebecca', 'Hello');

