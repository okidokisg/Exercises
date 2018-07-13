var data = require("./vehicledata");
//--------------------------------------------------
function Cell(text, add) {
	if (add > 0) {
		for (let i = 1; i <= add; i++)
			text += " ";
	}
	this.text = text.split("\h");
};

Cell.prototype.draw = function() {
	// console.log(this.text);
	// return this.text.reduce((a,b)=> a);
};
//--------------------------------------------------
function Header(headertext, add) {
	var newtxt = "";
	if (add > 0) {
		for (let i = 1; i <= add; i++)
			newtxt += "-";
	};
	headertext.text.push(newtxt);
	this.content = headertext;
};
//--------------------------------------------------
function verifyData(data) {
	var error = 0;
	var key = Object.keys(data[0]);
	key.forEach(function(element) {
		data.forEach(function(line) {
			if (!(element in line))
				error = 1;
		});
	});
	if (error == 1)
		return "error";
	else
		return data;
};

//--------------------------------------------------
function createTable(data) {
	if (data == "error")
		return ("Data corrupt!");

	var key = Object.keys(data[0]);
// (1) Create array of column widths
	var widths = key.map(function(element) {
		var maxWidth = 0;
		data.reduce(function(max, cur) {
			var curLen = cur[element].toString().length;
			var maxLen = max[element].toString().length;
			if (curLen > maxLen) {
				maxWidth = curLen;
				return cur;
			} else {
				maxWidth = maxLen;
				return max;
			}
		});
		return maxWidth;
	});
// (2) Headers array
	var cnt = 0;
	var header = key.map(function(element) {
		var width = widths[cnt];
		var widthdiff = width - (element.toString().length);	
		cnt++;
		return new Header(new Cell(element.toString(), widthdiff), width);
	});
// (3) Main data array
	var main = data.map(function(line) {
		var cnt = 0;
		return key.map(function(element) {
			var width = widths[cnt];
			cnt++;
			var spaces = (width - line[element].toString().length);
			return new Cell(line[element].toString(), spaces);
		});
	});
	return [ header ].concat(main);
};
//--------------------------------------------------
function writeTable(data) {
	console.log(data);
	return data[0].map(function(_x, i) {
		console.log(i);
		return data.reduce(function(max, row) {
			console.log(row[i]);
		}, 0);
	});
	
	// return data.map(function(row) {
	// console.log(row);
	// return row.draw();
	// })
};
//--------------------------------------------------
console.log(writeTable(createTable(verifyData(data))));