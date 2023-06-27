// Start with an array of hobbies. Print out only the words that end in "ing".

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
