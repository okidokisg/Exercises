//When we looked up all the people in our data set that lived more than
//90 years, only the latest generation in the data came out. Let’s take a
//closer look at that phenomenon.

//Compute and output the average age of the people in the ancestry data
//set per century. A person is assigned to a century by taking their year
//of death, dividing it by 100, and rounding it up, as in Math.ceil(person.
//died / 100).

//For bonus points, write a function groupBy that abstracts the grouping
//operation. It should accept as arguments an array and a function that
//computes the group for an element in the array and returns an object
//that maps group names to arrays of group members.

//Node: require underscore
var _ = require('../underscore/underscore');

//Node: require ancestry JSON data file
var data = require('./ancestry_file');
var ancestry = JSON.parse(data);

//Solution with GroupBy function
console.log('Using custom grouping function:');

function groupByCentury(array) {
	var grp = [];
	array.forEach(function(p) {
		var key = (p.born.toString().substring(0, 2)) + '00s';
		var age = p.died - p.born;
		if (!grp[key]) {
			grp[key] = [];
		}
		grp[key].push(age);
	})
	return grp;
};

function avgAges(array) {
	var keys = Object.keys(array);
	keys.sort(function(a, b) {
		return a.substring(0,4) - b.substring(0,4);
	});
	for (let i = 0; i < keys.length; i++) {
		var newArr = array[keys[i]];
		console.log('Average age in the ' + keys[i] + ': ' +
				Math.round((newArr.reduce((a,b)=> a+b))/newArr.length));
	};
};
avgAges(groupByCentury(ancestry));

//Solution using underscore
console.log('Using underscore _.groupBy:');

function groupByCentury2(array) {
	var arr = [];
	array.forEach(function(p) {
		var key = (p.born.toString().substring(0, 2)) + '00s';
		var age = p.died - p.born;
		arr.push({century: key, age: age});
	})
	var groups = _.groupBy(arr, 'century');
	return groups;
};

function avgAges2(array) {
	var keys = Object.keys(array);
	keys.sort(function(a, b) {
		return a.substring(0,4) - b.substring(0,4);
	});
	for (let i = 0; i < keys.length; i++) {
		var newArr = array[keys[i]];
		var avg = 0;
		for (let j = 0; j < newArr.length; j++) {
			avg += newArr[j].age;
		}
		console.log('Average age in the ' + keys[i] + ': ' +
				Math.round(avg/newArr.length));
	};
};
avgAges2(groupByCentury2(ancestry));
