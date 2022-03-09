/*
* Authors: Suzy Ford & Art Rios
* Created: 09 March 2022
* License: Public Domain
*/
//thanks to this site for saving us another 2 hours!
//https://www.geeksforgeeks.org/how-to-set-alert-message-on-button-click-in-jquery/

$(document).ready(function () {
    $("#btn").click(function () {
    alert("Hello! You have reached our fabulous alert message. Why? We're not sure.");
    $("#btn").css("background-color", "lightgreen");

    });
});
