//We’ve seen that % (the remainder operator) can be used to test whether
//a number is even or odd by using % 2 to check whether it’s divisible by
//two. Here’s another way to define whether a positive whole number is
//even or odd:
//- Zero is even.
//- One is odd.
//- For any other number N, its evenness is the same as N - 2.
//Define a recursive function isEven corresponding to this description. The
//function should accept a number parameter and return a Boolean.
//Test it on 50 and 75. See how it behaves on -1. Why? Can you think
//of a way to fix this?

function isEven(num) {
	if ( num === 0 ) {
		return true;		
	}
	if ( num < 0 ) {
		return false;		
	}
	num -= 2;
	return isEven(num);
}
console.log(isEven(Math.abs(37)));

// Example of recursive functions
function factorial(num) {
	var nextNum = num - 1;
	// Base case
	if (num === 1) {
		return num; // return 1;
	}
	return num * factorial(nextNum);
}
console.log(factorial(5)); // 120
