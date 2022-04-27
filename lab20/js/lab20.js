/*
* Authors: Suzy Ford & Art Rios
* Created: 26 April 2022
* License: Public Domain
*/
// :)

var URL = "https://xkcd.com/info.0.json";
var URLpre = "https://xkcd.com/";
var URLpost = "info.0.json";


function getComic(num) {
  if (typeof num === 'undefined') {
    numStr = "";
  } else {
    numStr = num.toString() + "/";
  }
  var ourURL = URLpre + numStr + URLpost;
  console.log("Our new URL:", ourURL);

  $.ajax({

      url: ourURL,

      type: "GET",
  })

  .done(function(data) {

      var imageUrl = data.img;

      var title = data.title;
      console.log("title:", title);

      var alt = data.alt;
      console.log("alt:", alt);

      $("#output").imageUrl(imageUrl);
      $("#output").title(title);
      $("#output").append(alt);
  })
  .fail(function(){
    console.log("^^ Sorry, don't mind this error, everything is going to be okay!");
    console.log("Keep going, enjoy the rest of your day! :-)");
  })

}

getComic();
