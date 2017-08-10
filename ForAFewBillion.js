//The servant instead asked that for 30 days he be given an amount that would double
var days = 30;
//starting with a penny.
//(1 penny for the first day, 2 for the second, 4 for the third, then 8, 16, 32 pennies, and so on).
var penny = 0.01;

var reward = 0;

var days10k = 0;

//How much was the reward after 30 days?
for (var i =1; i <= 30; i++ ) {
  reward =+ penny;
  penny = penny *2;
}

console.log("Reward in 30 days $" +reward);
/**

10,000 TEST

*/


var days = 30;

var penny = 0.01;

var reward = 0;

var days10k = 0;


for (var i =1; i <= 30; i++ ) {
  reward =+ penny;
  penny = penny *2;
  days10k++;

  if(reward >10000 && reward < 11000)
    break;



}

console.log("$10,000 in :" + days10k + "days");

/**

1 BILLION TEST

*/


var days = 0;

var penny = 0.01;

var reward = 0;

var days1B = 0;


for (reward =0.01; reward <1100000000; i++ ) {
  reward =+ penny;
  penny = penny *2;
  days1B++;

  if(reward >= 1000000000 && reward <1100000000)
    break;

}

console.log("$1B (closer to: $"+reward+") in :" + days1B + "days");

/**

Infinity TEST -- NOT WORKING / DUNNO HOW TO MAKE IT WORK

*/

var days = 0;

var penny = 0.01;

var reward = 0;

var days1B = 0;


for (reward =0.01; reward < reward.POSITIVE_INFINITY; reward++ ) {
  reward =+ penny;
  penny = penny *2;
  days1B++;

  // if(reward == reward.POSITIVE_INFINITY)
  //   break;

}

console.log("INFINITY in :" + days1B + "days");
