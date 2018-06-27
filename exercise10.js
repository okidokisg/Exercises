//Write a function arrayToList that builds up a data structure like the
//previous one when given [1, 2, 3] as argument, and write a listToArray
//function that produces an array from a list. Also write the helper
//functions prepend, which takes an element and a list and creates a new
//list that adds the element to the front of the input list, and nth, which
//takes a list and a number and returns the element at the given position
//in the list, or undefined when there is no such element.
//If you haven’t already, also write a recursive version of nth.

//var list2 = {
//	part : 1,
//	node : {
//		part : 2,
//		node : {
//			part : 3,
//			node : null
//		}
//	}
//};

var list = {};

function arrayToList(arr) {
	for (i = arr.length - 1; i >= 0; i--) {
		list.part = arr[i];
		list.node = list;
	}
	return list;
}

console.log(arrayToList([ 1, 2, 3 ]));