//Using the example data set from this chapter, compute the average age
//difference between mothers and children (the age of the mother when
//the child is born). You can use the average function defined earlier in
//this chapter.
//Note that not all the mothers mentioned in the data are themselves
//present in the array. The byName object, which makes it easy to find a
//person’s object from their name, might be useful here.

//Node: require JSON data file
var data = require('./ancestry_file');
var ancestry = JSON.parse(data);

var byName = {};
ancestry.forEach(person => byName[person.name] = person);
console.log(byName['Maria van Brussel']);

function avgAgeDiff(array){
	var newArr = [];
	array.filter(x => x.mother != null).forEach(function(p){
		var tmp = [byName[p.mother]];
		var ageMomBirth = 0, ageChildLived = 0;
		tmp.forEach(function(element){
			if (element != undefined){
				ageMomBirth = (p.born - element.born);
				ageChildLived = (p.died - p.born);
//				newArr.push({child: p.name, agec: ageChildLived,
//                           mom: element.name, agem: ageMomBirth});
				newArr.push(ageChildLived - ageMomBirth);
			}
		});
	});
	return Math.round((newArr.reduce((a,b) => a + b))/newArr.length);
};
console.log(avgAgeDiff(ancestry));