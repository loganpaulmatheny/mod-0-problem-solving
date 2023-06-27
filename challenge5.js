// Start with an array of travel destinations. Print every travel destination in alphabetical order embedded in a sentence using string interpolation. For example, if the destination is "New York City", print something like "The next place I want to visit is New York City!"

// create an array
// sort the array
// print with string interpolation

var cities = ["New York City", "Albuquerque", "Boston", "Tacoma", "London"];
cities.sort();

for (let i = 0; i < cities.length; i++) {
  console.log(`The next city I'd like to visit is...${cities[i]}`);
}

// console.log(cities);
