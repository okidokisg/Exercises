//Use the reduce method in combination with the concat method to “flatten”
//an array of arrays into a single array that has all the elements of the input
//arrays.

var array = [ [ 1, 2, 3 ], [ 4, 5, 6 ], ['seven', 'eight', 'nine'] ];
var newArr = array.reduce(function(accumulator, current) {
	return accumulator.concat(current);
});
console.log(newArr);
