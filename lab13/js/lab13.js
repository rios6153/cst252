/*
* Authors: Suzy Ford & Art Rios
* Created: 16 March 2022
* License: Public Domain
*/
//thanks to Wes for an awesome lecture :)

housesArray = [
  {
  title: "Gryffindor",
  text: "Oh lucky!"
},
{
  title: "Ravenclaw",
  text: "You Like?"
},
{
  title: "Slytherin",
  text: "Take Your Chances Here."
},
{
  title: "Hufflepuff",
  text: "What the....?"
}

]

function sortingHat(name) {

    var len = name.length;

    var mod = len % 4;

    var houseStr;
    if (mod == 0) {
        houseStr = "Gryfindor";
    } else if (mod == 1) {
        houseStr = "Slytherin";
    } else if (mod == 2) {
        houseStr = "Hufflepuff";
    }else if (mod == 3) {
        houseStr = "Ravenclaw";
    }

    return houseStr;
}

$("#my-button").click(function(){

  var name = $("#input").val()
  var house = sortingHat(name);
  console.log(house);
  $("#output").html("The Sorting Hat has sorted you into " + house);

});
