// var startPoint = 2;
// var endPoint = 0;
// var skipAmount = 0;

function printRange(startPoint,endPoint,skipAmount){

if(endPoint === undefined){ //If the user doesn't pass an end point, make it start at 0, and end at the first (printRange(4); would print 0, 1, 2, 3)
  endPoint = startPoint;
  startPoint = 0;

  }

if(skipAmount === undefined ) //If the user doesn't pass a skip amount, make it default to 1 (printRange(4, 8); would print 4, 5, 6, 7)
{
  skipAmount = 1;

}

  if(endPoint>0){ //Create a function that can take a start point, end point, and skip amount, to print all numbers in the range.
    for(var i = startPoint; i < endPoint; i = i + skipAmount){
      console.log(i);
    }
  }
  else if (endPoint<=0) { //Make sure it works for negative numbers
      for(var i = startPoint; i > endPoint; i = i - skipAmount){
        console.log(i);

  }

}




}
printRange(-24);
