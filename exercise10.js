//Write a function arrayToList that builds up a data structure like the
//previous one when given [1, 2, 3] as argument, and write a listToArray
//function that produces an array from a list. Also write the helper
//functions prepend, which takes an element and a list and creates a new
//list that adds the element to the front of the input list, and nth, which
//takes a list and a number and returns the element at the given position
//in the list, or undefined when there is no such element.
//If you haven’t already, also write a recursive version of nth.

//var list = {
//	value : 1,
//	rest : {
//		value : 2,
//		rest : {
//			value : 3,
//			rest : null
//		}
//	}
//};

var array = [1,33,544,5453];

console.log(array.map( x => x*1 ));
	

function arrayToList(array) {
	let list = null;
	for (let i = array.length - 1; i >= 0; i--) {
		list = {value: array[i], rest: list};
	}
	return list;
}
console.log(arrayToList([ 1, 2, 3 ]));
console.log(listToArray(arrayToList([10, 20, 30])));

function listToArray(list) {
	let array = [];
	for (let node = list; node; node = node.rest) {
		array.push(node.value);
	}
	return array;
}

function prepend(value, list) {
	return {value, rest: list};
}

function nth(list, n) {
	if (!list) return undefined;
	else if (n == 0) return list.value;
	else return nth(list.rest, n - 1);
}

console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));