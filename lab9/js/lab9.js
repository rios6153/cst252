​​/*
* Authors: Suzy Ford & Art Rios
* Created: 28 February 2022
* License: Public Domain
*/


function isEven(x){
  return(x % 2 == 0);
}

//test function
      console.log("is 1 even? ", isEven(1));
      console.log("is 2 even? ", isEven(2));
//array
      array = [200, 4000, 13, 100, 25, 5, 15, 35, 2.5]
      console.log("My array ", array);

      var result= array.map(isEven);
// should return [true, true, false, true, false, fales, false, false, false]
      console.log("Test of evenness of array:", result);

      var result = array.map(function(x){
        return x ** 0.5;
      })
// should return [14.142135623730951, 63.245553203367585, 3.605551275463989, 10, 5, 2.23606797749979, 3.872983346207417, 5.916079783099616, 1.5811388300841898]
console.log("Squareroot of array:", result);
