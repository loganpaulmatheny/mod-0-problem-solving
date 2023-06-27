// Start with an array of hobbies. Print out only the words that end in "ing".

// create an array of hobbies
// create a function
// loop through the array
// use the 'endsWith()' method with conditional to print hobbies that end with inghttps://github.com/loganpaulmatheny/mod-0-problem-solving

var hobbies = [
  "soccer",
  "drawing",
  "play hogwarts legacy",
  "running",
  "time with family",
];

function ingHobbies(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].endsWith("ing")) {
      console.log(arr[i]);
    }
  }
}

ingHobbies(hobbies);
