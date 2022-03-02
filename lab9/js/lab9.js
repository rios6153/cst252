/*
* Authors: Suzy Ford & Art Rios
* Created: 02 March 2022
* License: Public Domain
*/

//button elements
  var targetEl = document.getElementById("output");
  var newEl = document.createElement("button");
  targetEl.appendChild(newEl)
  newEl.innerHTML = "CLICK HERE";

//style added
  newEl.style.backgroundColor = "limegreen";
  newEl.style.color = "white";
  newEl.style.fontSize = "30px";
  newEl.style.padding = "center";
