/*
* Authors: Suzy Ford & Art Rios
* Created: 06 April 2022
* License: Public Domain
*/
// :)

//Create an object constructor called "Vehicle" and including make, model, year, color, and extras.

function Vehicle(make, model, year, color, extras, name) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.extras = extras;
  this.name = name;
  this.info = function() {
    return ("It was a " + this.make + " " + this.model + " " + this.year + " " + this.color + " with " + this.extras + " named " + this.name);
  }
}
//Create Objects for each vehicle
var vehicle1 = new Vehicle ("Volkswagon", "Bug,", "1967,", "red,", "a stick shift", "Lucy");
var vehicle2 = new Vehicle ("Chevy", "Camaro,", "1981,", "red,", "lots of power,", "Big Boy");
var vehicle3 = new Vehicle ("BMW", "530i,", "1989,", "gold,", "all the bells and whisles,", "Goldie");
var vehicle4 = new Vehicle ("Mazda", "RX7,", "1995,", "blue,", " a sun roof & front engine,", "Speedy");
var vehicle5 = new Vehicle ("Isuzu", "Trooper,", "1999,", "gold,", "seat warmers & sunroof,", "Troop");
var vehicle6 = new Vehicle ("Isuzu", "Rodeo", "2000", "white", "no power", "Poop Bucket");
var vehicle7 = new Vehicle ("Chrysler", "PT Cruiser,", "2003,", "silver,", "sporty rims,", "Bullet");

//Create output for each vehicleq
$("#output").append("<p>" + vehicle1.info() + "</p>");
$("#output").append("<p>" + vehicle2.info() + "</p>");
$("#output").append("<p>" + vehicle3.info() + "</p>");
$("#output").append("<p>" + vehicle4.info() + "</p>");
$("#output").append("<p>" + vehicle5.info() + "</p>");
$("#output").append("<p>" + vehicle6.info() + "</p>");
$("#output").append("<p>" + vehicle7.info() + "</p>");
