
// PART I:

// var students = [
//      {first_name:  'Michael', last_name : 'Jordan'},
//      {first_name : 'John', last_name : 'Rosales'},
//      {first_name : 'Mark', last_name : 'Guillen'},
//      {first_name : 'KB', last_name : 'Tonel'}
// ]
//
// function printArray(arr){
//   for(var i=0; i<arr.length; i++){
//     console.log(arr[i].first_name+" "+arr[i].last_name)
//
//   }
// }
//
// printArray(students);


// Part II (Optional)

var users = {
 'Students': [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }




 function printArrayWithNumOfChars(data){

   for(key in data){
     console.log(key);
     for(var i=0;i<data[key].length;i++){
       console.log((i+1)+" "+data[key][i].first_name.toUpperCase()+" "+data[key][i].last_name.toUpperCase()+" - "+(data[key][i].first_name.length+data[key][i].last_name.length));
     }

   }

 }

 printArrayWithNumOfChars(users);
