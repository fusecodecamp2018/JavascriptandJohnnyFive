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

## What is the semicolon for?

In javascript the semicolon is used to end a statement but are not necessarily required.  There are lots of web pages expressing views on whether to use semicolons or not.  It's really up to you and either way will work but just make sure you are consistent.


## Comments in your code

The general rule is always put comments in your code.  The amount of comments depends on the complexity of the code but the general purpose is to give the next person making modifications to your code basic information about what a block of code is supposed to do.


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


