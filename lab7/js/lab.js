/*
* Authors: Suzy Ford & Art Rios
* Created: 23 February 2022
* License: Public Domain
*/

// sortUserName. This will take user to a popup for their input.
function sortUserName() {
      var userName = window.prompt("Hey there. We are going to do something fun with our names when we type it in. You can try it yourself too!");
      console.log("userName =", userName);
//split string to array
      var nameArray = userName.split('');
      console.log("nameArray =", nameArray);
//sort array
      var nameArraySort = nameArray.sort();
      console.log("nameArraySort =", nameArraySort);
//join array back to string
      var nameSorted = nameArraySort.join('');
      console.log("nameSorted =", nameSorted);
      return nameSorted;
}

//Script Output
document.writeln("Did you notice what happened? - - - - - - ",
      sortUserName(), "</br>");
