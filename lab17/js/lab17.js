/*
* Authors: Suzy Ford & Art Rios
* Created: 11 April 2022
* License: Public Domain
*/
// :)

//new class method:

//Create an object constructor called "Car" and including make, model, year, color, and extras.

class Car{
  constructor(make, model, year, color){
    this.carmake = make;
    this.carmodel = model;
    this.caryear= year;
    this.carcolor = color;
  }
//method that returns a string with all this info

info(){
    return "Brand: " + this.carmake + "Model: " + this.carmodel + "Year: " + this.caryear + "Color: " + this.carcolor;
  }
}

mycar = new Car("Volkswagon","Bug", 1967,"red",  "a stick shift,", "Lucy");
secondcar = new Car("Chevy", "Camaro,", 1981, "red", "lots of power,", "Big Boy");
thirdcar = new Car("BMW", "530i,", 1989, "gold", "all the bells and whisles,", "Goldie");
fourthcar = new Car("Mazda", "RX7,", 1995, "blue", "a sun roof & front engine,", "Speedy");
fifthcar = new Car("Isuzu", "Trooper,", 1999, "gold", "seat warmers & sunroof,", "Troop");
sixthcar = new Car("Isuzu", "Rodeo", 2000, "white", "no power", "Poop Bucket");
seventhcar = new Car("Chrysler", "PT Cruiser", 2003, "silver", "sporty rims,", "Bullet");

console.log(mycar.info());

$("#output").append("<p>" + mycar.info() + "</p>");
$("#output").append("<p>" + secondcar.info() + "</p>");
$("#output").append("<p>" + thirdcar.info() + "</p>");
$("#output").append("<p>" + fourthcar.info() + "</p>");
$("#output").append("<p>" + fifthcar.info() + "</p>");
$("#output").append("<p>" + sixthcar.info() + "</p>");
$("#output").append("<p>" + seventhcar.info() + "</p>");

// OOP Design for Hangman
// class Hangman
// initialize
// set up the letterbox, user types here to guess a letterbox
// set up the msgBox, tell user to guess next letter and when the game is over
//set up wordBox, letters are added in their positions as they're correctly guessed
//set up guessesBox, display of letters guessed incorrectly
// set up the player
// assign the starting player

//play
  // loop infiniteky
  // call the board rendering method
  // generate a word at random and store it in a variable
  // display the length of the word to the user

//check game over
  // correct_guesses is less than the length of the word
  //prompt the user to guess a letter
  //if the guess is correct increment correct_guesses by 1
  //if the guess is incorrect increment incorrect_guesses by 1
  // and draw the next part of the hangman

//check victory
//if the incorrect_guesses is greater than 8, tell the user
//they lost and exit the program
//if correct_guesses is equal to the length of the word, tell the user they won

//loop
//refresh to start a new game
