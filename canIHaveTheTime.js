var HOUR = 11;
var MINUTE = 31;
var PERIOD = "PM";

//"just after"case
//check from AM to AM


//
// if(PERIOD !=="PM" || PERIOD !=="AM"){
//   console.log(false)
// }else {
//   console.log(true);
// }


if((HOUR >12 || HOUR <0)||(MINUTE <0 || MINUTE >=60)){
  console.log("Please enter an hour range from 0 to 12");
  console.log("Please enter a minute range from 0 to 59");
  console.log("Please enter a PERIOD, either 'AM' or 'PM'");

}

else{

if(PERIOD == "AM" && HOUR <= 11 && MINUTE < 30)
{
  if(MINUTE== 5){
    console.log(" 5 After " + HOUR + " in the morning")
  }
  else if(MINUTE ==15){
    console.log("quarter after " +HOUR+" in the morning");
    }
  else{
    console.log("Just after "+ HOUR+" in the morning");
    }
  }

//"Almost" case
//check AM to AM
else if (PERIOD == "AM" && MINUTE >= 30 && HOUR <11) {
  console.log("Half past "+(HOUR+11)+" in the morning");
}
//"Almost" case
//check 11AM to PM
else if (PERIOD =="AM" && MINUTE >=30 && HOUR ==11) {
  console.log("Half past " +HOUR +", Almost noon")
}
//"just after" case
//check PM to PM - AFTERNOON: for this I'm considering 12pm to 559pm the afternoon
else if (PERIOD =="PM" && MINUTE < 30 && (HOUR>=12||HOUR<6)) {
  if(MINUTE== 5){
    console.log(" 5 After " + HOUR + " in the afternoon")
  }
  else if(MINUTE ==15){
    console.log("quarter after " +HOUR+" in the afternoon");
    }
  else{
    console.log("Just after "+ HOUR+" in the afternoon");
    }
}
//"Almost case"
else if (PERIOD =="PM" && MINUTE >= 30 && (HOUR>=12||HOUR<6)) {
  console.log("Almost "+(HOUR+1)+" in the afternoon");
}
//"just after" case
//check 6pm to 11pm - evening
else if (PERIOD =="PM" && MINUTE < 30 && (HOUR>=6||HOUR<11)) {
  if(MINUTE== 5){
    console.log(" 5 After " + HOUR + " at night")
  }
  else if(MINUTE ==15){
    console.log("quarter after " +HOUR+" at the night");
    }
  else{
    console.log("Just after "+ HOUR+" at night");
    }
}

else if (PERIOD =="PM" && MINUTE == 30 && (HOUR>=6||HOUR!=11)) {
  console.log("Half past "+(HOUR)+" at night");
}

//"Almost" case
//check 11PM to AM
else if (PERIOD =="PM" && MINUTE >30 && HOUR ===11) {
  console.log("Almost midnigth");
}

}











//need a condition for morning to afternoon and night to morning
