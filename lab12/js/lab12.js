/*
* Authors: Suzy Ford & Art Rios
* Created: 14 March 2022
* License: Public Domain
*/
//thanks to Wes for an awesome lecture :)


var myButton = $("<button>");
myButton.html("Press me");
$("#output").append(myButton);


myButton.click(function(){

	myButton.addClass("green-button");

	$("#pop-up").toggleClass("shown");
})

$("#pop-submit").click(function(){
	var name = $("#stuff").val();
	$("#your-name-here").html(name);
	$("#pop-up").removeClass("shown");
})

$("button.red").click(function(){
  $("#target2").removeClass("green");
	$("#target1").toggleClass("red")
});
$("button.green").click(function(){
  $("#target1").removeClass("red");
	$("#target2").toggleClass("green");
});
$("button.blue").click(function(){
  $("#target1").removeClass("red");
	$("#target2").removeClass("green");
	$("#target3").toggleClass("blue");
});
