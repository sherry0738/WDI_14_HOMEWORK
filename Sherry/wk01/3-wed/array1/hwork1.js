var daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday", "Sunday"];
console.log(daysOfTheWeek);

daysOfTheWeek.pop(); //remove sunday from the last one of that array
console.log(daysOfTheWeek);

daysOfTheWeek.unshift("Sunday"); //add a value to the 1st positon
console.log(daysOfTheWeek);

var newDaysOfTheWeek = new Array();
newDaysOfTheWeek[0] = new Array("Monday", "Tuesday", "Wednesday", "Thursday", "Friday");
newDaysOfTheWeek[1] = new Array("Saturday", "Sunday");

newDaysOfTheWeek.splice(1,1);
console.log(newDaysOfTheWeek);

newDaysOfTheWeek[0].sort();
console.log(newDaysOfTheWeek[0]);

