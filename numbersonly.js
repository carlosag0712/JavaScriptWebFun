
var mixedArr = [1, "apple", -3, "orange", 0.5]

// Numbers Only
// Make a function that copies an array, ONLY accepting the items that are numbers.
//
// IT SHOULD RETURN A NEW ARRAY

function numbersOnly(arr){
  var newArr = [];

  for(var i = 0; i<arr.length; i++){
    if(typeof arr[i]=== 'number'){
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
  return newArr;
}

numbersOnly(mixedArr);

// Bonus (Only If You Have Time):
//
// Make a second function that removes them from the given array. (instead of copying to a new array)
// Do you need to return the array?

var mixedArr2 = [1, "apple", -3, "orange", 0.5]
console.log(mixedArr2.indexOf("apple"));

function numbersOnlySameArr(arr){

  var newArr = [];

  for(var i = 0; i<arr.length; i++){
    if(typeof arr[i]=== 'number'){
      newArr.push(arr[i]);
    }
  }
  arr = newArr
  console.log(arr);
  return arr;

}

mixedArr2 = numbersOnlySameArr(mixedArr2);

console.log(mixedArr2);
