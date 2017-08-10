var arr1 = ["James", "Jill", "Jane", "Jack"];
var s1 = "->";
var s2 = "=>";
var s3 = "::";
var s4 = "----";

function fancyArray(arr, symbol, reversed){

if(symbol === undefined){
  symbol = s1;
}

if(reversed === undefined){
  reversed = "no"
}

if(reversed == "no"){

for(var i = 0; i < arr.length; i++){
  console.log(i+" "+symbol+" "+arr1[i]);
}

}
else if (reversed === "reversed") {
  for(var i = arr.length-1; i >=0 ; i--){
    console.log(i+" "+symbol+" "+arr1[i]);
  }

}

}

fancyArray(arr1,s4,"reversed")
