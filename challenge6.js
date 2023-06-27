// Given a sentence with only lowercase letters, print the same sentence with the first letter of every word capitalized. For example, if you were given "Turing is the best", return "Turing Is The Best" instead!

// declare a string
// split the string
// iterate through the words
// capitalize the first letter ONLY
// rejoin the strings together

// using https://www.freecodecamp.org/news/how-to-capitalize-words-in-javascript/#:~:text=In%20JavaScript%2C%20we%20have%20a,%22%3B%20publication%5B0%5D I can

var sentence = "Arlo likes to sleep in his little house";

console.log(`The original sentence is - ${sentence}`);
function firstLetter(sent) {
  var words = sent.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }
  return words.join(" ");
}
console.log(`And the new sentence is - ${firstLetter(sentence)}`);
