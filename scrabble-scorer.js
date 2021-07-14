// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85 //

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};
let word = "";
function initialPrompt() {
  word = input.question("Let's play some Scrabble! \n\nEnter a word to score: ");
  return word;
};

function oldScrabbleScorer(word) {
  word = word.toUpperCase();
  let letterPoints = "";
  for (let i = 0; i < word.length; i++) {
    for (const pointValue in oldPointStructure) {
     if (oldPointStructure[pointValue].includes(word[i])) {
      letterPoints += `Points for '${word[i]}': ${pointValue}\n`
     }
    }
  }
  return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //

// don't change the names or your program won't work as expected. //


let simpleScore = function(word){
   let letterPoints = word.length;
  return letterPoints
}

let vowelBonusScore = function(word){
  word = word.toLowerCase();
  let letterPoints = word.length;
  let vowels = ['a', 'e', 'i', 'o', 'u']; //'aeiou' <--grain of salt
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])){
      letterPoints += 2; 
    } 
   }

   return letterPoints;
}
// let word = 'cow' -> [c] does vowels[] INCLUDE 'c'?
// [o] does vowels[] INCLUDE 'o'?
// yes -> add extra 2 pts to letterPoints

let scrabbleScore = function(word){
  word = word.toLowerCase();
  let letterPoints = 0;
  for (let i = 0; i < word.length; i++) {
    for (pointValue in newPointStructure) {
     if (pointValue === word[i]) {
      letterPoints = (letterPoints + Number(newPointStructure[pointValue]));
      }
    }
  }
  return letterPoints;
}

const scoringAlgorithms = [
  {
    name: "Simple",
    desc: "Each letter is worth 1 point.",
    scoringFunction: simpleScore
  },
  {
    name: "Bonus Vowels",
    desc: "Vowels are 3 pts, consonants are 1 pt.",
    scoringFunction: vowelBonusScore
  },
  {
    name: "Scrabble",
    desc: "The traditional scoring algorithm.",
    scoringFunction: scrabbleScore
  }
];

function scorerPrompt(){

console.log("Which scoring algorithm would you like to use?\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system");

algorithmChoice = Number(input.question("Enter 0 1 or 2: "));

  if (algorithmChoice === 0) {
      return scoringAlgorithms[0];

    }else if (algorithmChoice === 1){
      return scoringAlgorithms[1];
      
  } else if (algorithmChoice = 2){
      return scoringAlgorithms[2];

    }
  }

// function transform(oldPointStructure) { 
//   let newPointStructure = {};

function transform(oldPointStructure) {
  //Defining new scoring object
  let xyz = {};
  //iterates through keys in oldPointStructure
  for (key in oldPointStructure) {
    //sets i to start at index 0, iterates through each index of each value
    for (let i = 0; i < oldPointStructure[key].length; i++){
      //declares variable that is equal to index of each value of that key, e.g.: oldPointStructure[1][i] === 'A'
      let letterItem = oldPointStructure[key][i];
      //makes letters case insensitive
      xyz[letterItem.toLowerCase()] = Number(key);
      //sets that new variable letterItem as the key of your newPointStructure and the key referenced in line 105 as the new value. Also changes the type of the value to a number.
    };
 
  //will end transform function with a result of your new keys and values
 }
return xyz;
 };
//this is not working because you declared newPointStructure in transform function and then are declaring it again here but it will reference it in transform. If you change newPointStructure to something else inside transform I think you should be fine. You're shadowing variables here which you want to stay away from for your program to run correctly.
let newPointStructure = transform(oldPointStructure);

// newPointStructure[""] = 0;
  
  // loop through old point object using for...includes - for in loop - 
  // loop through array of each object key (old - pt. value)
  // assign THAT letter as a new key in newPointStructure with old point value as value 
  // So I want to take something like "1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T']" and convert it to a new object which uses each letter as a key in relation to the same point value.  OR.  A:1 - E:1 - I:1 - O:1 - U:1 - L:1 - N:1 - R:1 - S:1 - T:1, as an array/object?

  

function runProgram() {
  let wordToScore = initialPrompt();
  let algorithm = scorerPrompt();
  let score = algorithm.scoringFunction(wordToScore);

  console.log(`Score for ${wordToScore}: ${score}`);

}

// console.log(vowelBonusScore(initialPrompt()));

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  initialPrompt: initialPrompt,
  transform: transform,
  oldPointStructure: oldPointStructure,
  simpleScore: simpleScore,
  vowelBonusScore: vowelBonusScore,
  scrabbleScore: scrabbleScore,
  scoringAlgorithms: scoringAlgorithms,
  newPointStructure: newPointStructure,
  runProgram: runProgram,
  scorerPrompt: scorerPrompt
};