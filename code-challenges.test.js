// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10];
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36];
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

/*
---- TEST TEMPLATE ----
describe("", () => {
  it(``, () => {
    expect().toEqual()
  })
})
--------
// I changed the quotation marks inside of the it function to a template literal, just to reduce the headache of having to change quotation marks inside of it. It seems to work just fine, but please let me know if doing so would be a bad convention!

---- PSEUDOCODE TEMPLATE ----
--------
// I created a template for my pseudocode because it helps keep me focused, and also ensures I don't miss anything when I'm planning out my code.
--------
//
//
--------- FUNCTION INFORMATION:
Describe what the function will do:
Function Name:
Function Parameter(s):
--------- INPUT / OUTPUT:
input 1:
output 1:

input 2:
output 2:
--------- STEPS/METHODS:
1.
2.
3.
4.
*/

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("isObjectEven", () => {
  it(`Takes a object as an argument and decides if the number inside it is evenly divisible by three or not.`, () => {
    const object1 = { number: 15 };
    // Expected output: "15 is divisible by three"
    const object2 = { number: 0 };
    // Expected output: "0 is divisible by three"
    const object3 = { number: -7 };
    // Expected output: "-7 is not divisible by three"
    expect(isObjectEven(object1)).toEqual("15 is divisible by three");
    expect(isObjectEven(object2)).toEqual("0 is divisible by three");
    expect(isObjectEven(object3)).toEqual("-7 is not divisible by three");
  });
});

// RED:
// Good fail, error message:  ReferenceError: isObjectEven is not defined

// b) Create the function that makes the test pass.
/*
// Before I get into coding this, I need to figure out how to make a function that's able to reliably access the key:value pairs inside of an object. After doing some research, I've discovered some methods that work specifically on objects. The one I'm interested in is.values(). Using this, I should be able to convert just the value of the key:value pairs into an array, which I can then use something like .filter() on for my comparison. To confirm this, I'm going to run a few tests of my own before I get into building the function.
*/

// Creating a test object
// const object4 = { number: 5 };
// Assigning the value of a new variable to ONLY the value of the key:value pair using Object.values()
// const valueOnly = Object.values(object4);
// Checking the new variable with a console.log
// console.log(valueOnly);
// Output: [5]

/*
Success! Now that I know how to access the value of any object, I can move forwards with creating the function.

--------- FUNCTION INFORMATION:
Describe what the function will do: The function will accept an object, then use comparison operators to determine whether the value of that object is divisible by 3.
Function Name: isObjectEven
Function Parameter(s): 1, object
--------- INPUT / OUTPUT:
input 1: object
output 1: "value is divisible by three"
output 2: "value is not divisible by three"
--------- STEPS/METHODS:
1. Declare a function called isObjectEven that will accept object as a parameter.
2. Create an empty variable (tempVar) that will hold an array containing only the value of the key:value pair using Object.values().
3. Use a comparison operator to determine if the value of the resuting array is divisible by three.
    3-1. If it IS divisible, return: `${tempVar} is divisible by three`
    3-2. If it is NOT divisible, return: `${tempVar} is not divisible by three`
    3-3. Include a catch-all error message as the else.
4. Test!
*/

const isObjectEven = (object) => {
  let tempVar = Object.values(object);
  if (tempVar % 3 === 0) {
    return `${tempVar} is divisible by three`;
  } else if (tempVar % 3 !== 0) {
    return `${tempVar} is not divisible by three`;
  } else {
    return "Oops! We've hit a snag.";
  }
};
// Result: Test Suites: 1 passed, 1 total

// So, even though this code DEFINITELY works, after helping another classmate solve the same problem, I realized that I could have also solved this by simply using object.number. I was trying to think in broad terms about needing to convert the value of the key, possibly without knowing (or needing to know) what that key name was. So, just for fun, I'm going to make another version here using that method as well, then test and comment it out.

// const isObjectEven = (object) => {
//   if (object.number % 3 === 0) {
//     return `${object.number} is divisible by three`;
//   } else if (object.number % 3 !== 0) {
//     return `${object.number} is not divisible by three`;
//   } else {
//     return "Oops! We've hit a snag.";
//   }
// };
// Result: Test Suites: 1 passed, 1 total

// I'm happy with the result of my original function, so that's the one I'm going to leave un-commented. I think it's following the theory of making functions as reusable as possible, so I'm happy I did the research to discover object methods!

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("capitalizeArray", () => {
  const randomNouns1 = [
    "streetlamp",
    "potato",
    "teeth",
    "conclusion",
    "nephew",
  ];
  // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
  const randomNouns2 = ["temperature", "database", "chopsticks", "mango"];
  // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

  it(`Takes in an array of words and returns an array with all the words capitalized.`, () => {
    expect(capitalizeArray(randomNouns1)).toEqual([
      "Streetlamp",
      "Potato",
      "Teeth",
      "Conclusion",
      "Nephew",
    ]);
    expect(capitalizeArray(randomNouns2)).toEqual([
      "Temperature",
      "Database",
      "Chopsticks",
      "Mango",
    ]);
  });
});

// RED:
// Good Fail: ReferenceError: capitalizeArray is not defined

// b) Create the function that makes the test pass.

/*
--------- FUNCTION INFORMATION:
Describe what the function will do: The function will accept an array, then iterate through the array to return all its strings with the first letter capitalized.
Function Name: capitalizeArray
Function Parameter(s): 1, array
--------- INPUT / OUTPUT:
input 1: an array of strings
output 1: an array of strings, with the first letter in each string capitalized.

--------- STEPS/METHODS:
1. Declare a function called capitalizeArray which will accept an array.
2. Declare a temporary variable inside of the function to store the updated data of the array.
3. Use .map() on the array to iterate through the elements, then use .charAt(0) and .toUpperCase() to capitalize the first letter of each string. 
4. Use .slice() to remove the original first letter of the element that's currently being iterated, then add it to the uppercase letter.
*/

const capitalizeArray = (array) => {
  return array.map((value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  });
};
// Result: Test Suites: 1 passed, 1 total

/*
I had to do a lot of research on this one. I ended up working on the same function and forgot to comment out the failed versions, but I'll be honest here and tell you what my attempts looked like. (:
The first time I ran it, my return looked more like this:
// return array.map(value => value.charAt(0).toUpperCase)
That returned ONLY the first letter of the array capitalized, which is when I realized I needed to use .slice(). So, I tried chaining .slice to the return, like this:
// return array.map(value => value.charAt(0).toUpperCase.slice(1))
But that returned an error specifying that it wasn't a function, so I had to do a little more research to figure out my syntax. I already had the idea to remove the first letter from the array and then put it back together somehow, but after doing research on this problem, I found this solution (code is NOT mine):
// function capitalizeWords(arr) {
//   return arr.map(element => {
//     return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
//   });
// }
So, after seeing this, I realized I could use the addition operator to simply add the first letter to the latter half of the word by applying .charAt(0).toUpperCase() to the first letter, then .slice(1) to remove that letter and return the rest of the array.
*/

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("logFirstVowel", () => {
  it(`Takes in a string and logs the index of the first vowel.`, () => {
    const vowelTester1 = "learn";
    // Expected output: 1
    const vowelTester2 = "academy";
    // Expected output: 0
    const vowelTester3 = "challenges";
    // Expected output: 2
    expect(logFirstVowel(vowelTester1)).toEqual(1);
    expect(logFirstVowel(vowelTester2)).toEqual(0);
    expect(logFirstVowel(vowelTester3)).toEqual(2);
    expect(logFirstVowel("glyph")).toEqual("glyph does not contain a vowel.");
  });
});

// RED:
// Good Fail: ReferenceError: logFirstVowel is not defined

// b) Create the function that makes the test pass.

/*
--------- FUNCTION INFORMATION:
Describe what the function will do: Function will accept a string, and return the index of its' first vowel.
Function Name: logFirstVowel
Function Parameter(s): 1, string
--------- INPUT / OUTPUT:
input 1: string
output 1: index of the first vowel
--------- STEPS/METHODS:
1. Declare a function called logFirstVowel which will accept a string as a parameter.
2. Use a for loop to iterate through the string to check the value of each index
3. Use a conditional statement to determine if the index contains any vowels (I can use a single statement for this if I use the OR || operator.)
4. Return the index of the first vowel.
*/

const logFirstVowel = (string) => {
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === "a" ||
      string[i] === "e" ||
      string[i] === "i" ||
      string[i] === "o" ||
      string[i] === "u"
    ) {
      return i;
      // } else return `${string} does not contain a vowel.`;
      // I had also tried an else if statement with the !== operator, but NEITHER of those work, because it will stop IMMEDIATELY if the second index of the word happens to not be a vowel. So, I have to put the extra return outside of the loop in order to ensure that it would iterate through the entire string first, THEN return the string below if it doesn't find a vowel.
    }
  }
  return `${string} does not contain a vowel.`;
};

// Result: Test Suites: 1 passed, 1 total

/*
After a LOT of overthinking this one (thinking about converting it to an array and using .filter(), realizing that if I did that I wouldn't be able to access the original index, looking up various string/array methods, etc....), I took Tricia's advice to try and solve it the simplest way... Using a for loop.

That's when I realized that for this SPECIFIC case, the for loop would actually be the perfect fit. It will automatically go through the index of each index of the string, and stop at the first instance of a vowel when I use the OR operator. Based on my research, while there are other ways to make this happen, I believe in this instance the for loop is actually the easiest and simplest method that needs the least amount of code.
*/
