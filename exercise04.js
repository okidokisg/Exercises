//The previous chapter introduced the standard function Math.min that returns
//its smallest argument. We can do that ourselves now. Write a
//function min that takes two arguments and returns their minimum.

var min1 = function(arg1, arg2) {
	if (arg1 < arg2)
		return (arg1 + " is the smallest number.");
	else if (arg2 < arg1)
		return (arg2 + " is the smallest number.");
	else
		return (arg1 + " and " + arg2 + " are identical!");
};

function min2(arg1, arg2) {
	if (arg1 < arg2)
		return (arg1 + " is the smallest number.");
	else if (arg2 < arg1)
		return (arg2 + " is the smallest number.");
	else
		return (arg1 + " and " + arg2 + " are identical!");
};

console.log(min1(43, 2));
console.log(min2(21, 1098));
console.log(Math.min(3423, 3112) + " is the smallest number.");