/*
* Authors: Suzy Ford & Art Rios
* Created: 20 February 2022
* License: Public Domain
*/

// Define Variables
ourTransport = ["Monterey-Salinas Transit", "train-hopping", "Spirit Airlines", "Honda Rebel 500cc",
"Trycycle", "White Vans #vanslife"
    ];

theMainRide = {
  make: "Honda",
  model : "Rebel",
  color : "Red",
  year : 1995,
  age : function() {
    return 2022 - age;
  }
}

// output
document.writeln("Kinds of transportation we use:", ourTransport, "</br>");
document.writeln("The Main Ride: <pre>",
    JSON.stringify(theMainRide, null, '\t'), "</pre>");
