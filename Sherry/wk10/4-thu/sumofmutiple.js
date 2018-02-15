// If we list all the natural numbers below 10 that are multiples of 3 or 5, 
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// 1, 2, [3], 4, [5], [6], 7, 8, [9], 10

// 3 + 5 + 6 + 9 = 23
// Write a program that, given a number, 
// can find the sum of all the multiples of 3 or 5 up to and including that number.

// Write the program in javascript with nodejs.

// $ node sumOfMultiples 10
// $ 23


var sum = 0;

function sumOfMultiples(num) {
	for(var i = 0; i < num; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			sum += i;
	}
	}
	console.log(sum);
};
		
sumOfMultiples(10);

	
