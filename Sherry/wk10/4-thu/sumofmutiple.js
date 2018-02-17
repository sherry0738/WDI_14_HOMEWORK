// If we list all the natural numbers below 10 that are multiples of 3 or 5, 
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// 1, 2, [3], 4, [5], [6], 7, 8, [9], 10

// 3 + 5 + 6 + 9 = 23
// Write a program that, given a number, 
// can find the sum of all the multiples of 3 or 5 up to and including that number.

// Write the program in javascript with nodejs.

// $ node sumOfMultiples.js 9
// $ 23
// $ node sumOfMultiples.js 5
// $ 8

// var _ = require('underscore');

var givenNum = process.argv[2];
var arr = [];

	for(var i = 1; i <= givenNum; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			arr.push(i);
		 }
	}
	//console.log(arr);
	var sum = 0;
	arr.forEach(function(num) {
		 sum += num;
	});	
	console.log(sum);
			
// var findNums = _.filter(numbers, function(num) {
// 			return num % 3 === 0 || num % 5 === 0; });

// var sum = _.reduce(findNums, function(memo, i) {
// 	return memo + i; }, 0);
		
// 			//sum += i;
	
// console.log(findNums);
// console.log(sum);
	



