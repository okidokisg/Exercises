//introducing JSON functions
var string = JSON.stringify({
	name : "X",
	born : 1980
});
console.log(string);
console.log(JSON.parse(string).born);

//Node: require JSON data file
var data = require('./ancestry_file');
console.log(data);
var ancestry = JSON.parse(data);
console.log(ancestry.length);

//using FILTER
console.log(ancestry.filter(function(person) {
	return person.father == "Carolus Haverbeke";
}));
var overNinety = ancestry.filter(function(person) {
	return person.died - person.born > 90;
});

//using FOREACH
overNinety.forEach(function(element) {
	console.log(element.name);
});

//using MAP
var newArray = [];
overNinety.map(function(element) {
	newArray.push(element.name);
});
console.log(newArray);

//using REDUCE
console.log(ancestry.reduce(function(min, cur) {
	if (min.born < cur.born)
		return min;
	else
		return cur;
}));

//average age (my way)
var totAgeM = 0, cntM = 0, totAgeF = 0, cntF = 0;
ancestry.forEach(function(person) {
	if (person.sex == 'm') {
		totAgeM += (person.died - person.born);
		cntM++;
	}
	if (person.sex == 'f') {
		totAgeF += (person.died - person.born);
		cntF++;
	}
});
console.log("Average age for men: " + Math.round(totAgeM / cntM));
console.log("Average age for women: " + Math.round(totAgeF / cntF));

//average age (training way)
function age(p) {
	return (p.died - p.born);
}
function male(p) {
	return p.sex == "m";
}
function female(p) {
	return p.sex == "f";
}

function average(array) {
	return Math.round((array.reduce(function(a, b) {
		return a + b;
	}))/array.length);
}

console.log(average(ancestry.filter(female).map(age)));

var noMales = (ancestry.filter(p => p.sex == "m").length);
//long form
console.log(ancestry.filter(function(p) {
	return p.sex == "m";
}).map(function(p) {
	return (p.died - p.born);
}).reduce(function(a,b){
	return a + b;
}) / noMales);
//short form
console.log(Math.round((ancestry.filter(p => p.sex == "m").
		map(p => p.died - p.born).
		reduce((a,b) => a + b)) / noMales));


//function readTextFile(file, callback) {
//var rawFile = new XMLHttpRequest();
//rawFile.overrideMimeType("application/json");
//rawFile.open("GET", file, true);
//rawFile.onreadystatechange = function() {
//if (rawFile.readyState === 4 && rawFile.status == "200") {
//callback(rawFile.responseText);
//}
//}
//rawFile.send(null);
//}

////usage:
//readTextFile("C:\Users\tmcgrath.MSE\workspace_new\Exercises\ancestry.json",
//function(text){
//var data = JSON.parse(text);
//console.log(data);
//});
