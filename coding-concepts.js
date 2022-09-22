// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Foxtrot 2022";
// console.log(cohort.split(""));
// Output after running:
/*
[
  'F', 'o', 'x', 't',
  'r', 'o', 't', ' ',
  '2', '0', '2', '2'
]
//Note: It's spaced like this because my terminal automatically formatted it. (:
*/

// a) Your answer: I believe that the method .split() turns strings into arrays. So, based on that, I believe the output would be:
// ['F', 'o', 'x', 't', 'r', 'o', 't', ' ', '2', '0', '2', '2']

// b) Verify and explain: I was correct! The method.split() splits a string into an array, which means that every character inside of the string (including spaces!) will be turned into elements inside of an array.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`;
};
// console.log(greeter("LEARN Student"));
//Output after running: undefined

// a) Your answer: This function has no return statement, so it will return 'undefined' even if we pass it a valid argument.

// b) Verify and explain: I was correct! Just to test it out, here's the same function but with a return statement:

// const greeter = (name) => {
//   return `Hello, ${name}!`;
// };
// console.log(greeter("LEARN Student"));
// Output: Hello, LEARN Student!

// It worked this time because I actually told it to return something. When we pass the string "LEARN Student" into the function, it will use string interpolation to include the value of that argument into the returned sentence.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2);
// console.log(multipliedByTwo);
//Output after running: [ 8, 10, 12, 14, 16 ]

// a) Your answer: I believe that the variable multipliedByTwo will contain a new array that the .map() method has created, which will contain the result of the current variables being multiplied by 2. The .map() method will return an array of the SAME LENGTH, so it's good for using when you want to do something to ALL of the elements inside of an array. So, the output after using console.log on the variable would be:
// [8, 10, 12, 14, 16]

// b) Verify and explain: I was correct! My logic above was sound, but I will also add that we were able to achieve this result on the same line as the variable declaration (AKA, without needing to create a function specifically perform this operation) BECAUSE we were using .map(), which has an implicit return for simple operations like this.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0);
// console.log(onlyOdds);
//Output after running: [ 11, 13, 15 ]

// a) Your answer: I believe that the variable onlyOdds will contain a new array that the .filter() method has created, which will contain the result of an operation which checks whether the numbers are odd. So, the resulting array would be:
// [11, 13, 15]
// b) Verify and explain: I was correct! We've used .filter() in this instance because we want to return only specific elements from the array, based on the specified condition of them being odd. Even though .filter() will iterate through every element inside of an array, it will ONLY return the values of elements which pass the condition we've specified. Also, just like the previous question, we're seeing implicit return in action here.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub",
};
// console.log(myCodingSkills.languages[0]);
// Output after running: JavaScript

// a) Your answer: I believe this will return the string "Javascript", because we're using dot and bracket notation to access the information stored inside of this object, and then the array index that's stored as the value of the key:value pair.
// b) Verify and explain: I was correct! To visualize what this console.log is accessing, we can follow it like this: myCodingSkills -> (dot to access data inside of an object) languages -> (bracket notation to access array index) -> "Javascript"

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    (this.student = name), (this.cohort = "Foxtrot"), (this.year = 2022);
  }
}
const learnStudent = new Learn("George");
console.log(learnStudent);
// Output after running: Learn { student: 'George', cohort: 'Foxtrot', year: 2022 }

// a) Your answer: This should log a new object, which will contain the following key:value pairs:
// { student:"George", cohort:"Foxtrot", year: 2022 }

// b) Verify and explain: I was correct about it logging a new object, I just forgot to include the class name at the beginning. This is happening because we're creating a new instance of the class, which is being saved to the variable learnStudent. When we pass the string "George" into the argument, it takes the form of the "name" parameter, then gets assigned all of the key:value pairs that are associated with that class.
