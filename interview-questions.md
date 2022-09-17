# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: In relation to functions, a 'parameter' is an empty value that we can use in place of whatever value we're going to be passing into that function. It's declared right after the function name, and you can declare as many parameters as you need. Since parameters are just placeholders, you can name them anything you want - but it's considered best practice to name them meaningfully based on what you'll be passing into them. Once the function has been created, we call the variable (or value) that we're going to be passing into it an 'argument' (referred to as 'invoking' the function). So, if you've declared that your function will accept a string as a parameter, you might pass in the string "Hello" as an argument that will then replace all the placeholder values in your function.

Researched answer: In very simple terms, parameters are the empty variables that are declared at the beginning of a function. Arguments contain the values that we then pass into those empty parameters once we invoke the function.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: The map method in Javascript accepts three parameters, which are (in order): value, index, and array. Value is the only required parameter, while index and array are optional. Value is required because at the bare minimum, .map() needs to have access to the value of the array it's accessing, otherwise it won't be able to do anything.

Researched answer: In addition to my previous response, the second parameter (index) can be used to access the index of the current iteration. You can also use the third parameter (array) will be a copy of the original array. This will allow you to access parts of the original array that you may lose access through via the normal process of iteration, so it's useful if you need to access information about the original array while you're iterating.

3. What is the difference between map and filter?

Your answer: Both map and filter are methods that can be applied to functions in order to iterate through their elements, but they're best used in very different scenarios. Map will iterate through (and usually do something to) EVERY element in an array, and then return an array of the same length. This is useful if you want to perform something like a mathematical operation, or maybe reassign data inside of an object. Filter will iterate through every element in an array, but will only return the elements that have met a specified condition. As the name implies, it will 'filter out' the data that we don't want, leaving us with only the data we're looking for.

Researched answer: In addition to my previous response, it's also worth noting that both map and filter return SUBSETS of the original array, which means that the original array will not be mutated.

4. What is iteration?

Your answer: Iteration is the process of repeating a process over and over, and in coding terms, iteration will usually stop when a specified condition is met. You see iteration in Javascript through the use of things like for loops, in loops, map, and filter. Iterating is an incredibly helpful skill for making sense of data, because we are often dealing with VERY large amounts of it, and iteration makes searching through the sea of data to find the specific thing we're looking for much easier.

Researched answer: In addition to my previous response, you can also use iteration in regards to coding to refer to the process of improving a project through the implimentation of testing and review until you're left with the end result, which will hopefully be the ideal version of what you were originally trying to achieve. (:

5. What is the difference between a class and an object?

Your answer: In Javascript, an object is a way of storing sets of data inside of key:value pairs. You can compare them to arrays, but instead of accessing the value inside of an object with it's index, you can access value based on the set name of its' key. Classes, on the other hand, are like empty templates that we can then fill with objects to be reusable. For example, if you wanted to store user information, you could establish a Class template with an object that included their name, email address, age, phone number, etc. Any time you want to add a new user, you'd simply declare a variable and assign it to that Class, passing in the unique information that would then be stored inside of the key:value pairs that make up the construction of the Class.

Researched answer: In addition to my previous response, it's important to note that objects are also a data type in the Javascript language. They are considered non-primitive data types, along with classes.

6. STRETCH: What is hoisting in JavaScript?

Your answer: That's a great question! I'm not personally familiar with the term hoisting in regards to Javascript, but based on the word "hoisting", I would infer that it has something to do with bringing something to the top of your code. I'll definitely look into it, and get back to you with a better answer!

Researched answer: The process of hoisting in Javascript refers to the practice of moving all of your declarations to the top of their scope. This can be very beneficial, especially for functions, because it allows them to be safely used BEFORE they are declared. The same thing goes for variable declaration, although it may seem obvious, it's a very good idea to make sure that all of your variables have been declared BEFORE running your code.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories: A brief description of a feature told from the perspective of a user, usually following the template: As a (type of user), I want (goal) so that (reason).

2. Spread operator: An operator in Javascript that takes in something like an array or an object and expands it into individual elements.

3. React: An open-source Javascript library that is used to build user interfaces from components.

4. React props: A keyword used in React, which stands for properties and is used to pass data between components.

5. DOM events: DOM stands for Document Object Model, and DOM events are a signal that something either has ALREADY occured, or is ABLE to occur with user interaction. (EX. a mouse click, an image loading, a key press, etc.)
