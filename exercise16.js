var data = require("./vehicledata");
// --------------------------------------------------
function Cell(text, add) {
	var type = typeof text;
	text = text.toString();
	if (add > 0) {
		for (let i = 1; i <= add; i++) {
			if (type === "number")
				text = " " + text;
			else
				text += " ";
		}
	}
	this.text = text.split('\n');
};
Cell.prototype.draw = function() {
	return this.text[0];
};
// --------------------------------------------------
function Header(headertext, add) {
	this.content = headertext;
};
Header.prototype.draw = function() {
	return this.content.text[0].toUpperCase();
};
// --------------------------------------------------
function HeadLin(headertext, add) {
	var newtxt = "";
	if (add > 0) {
		for (let i = 1; i <= add; i++)
			newtxt += "-";
	}
	headertext.text[0] = newtxt;
	this.content = headertext;
};
HeadLin.prototype.draw = function() {
	return this.content.text[0];
};
// --------------------------------------------------
function createTable(data) {
	var key = Object.keys(data[0]);

	// (1) Create array of column widths
	var widths = key.map(function(element) {
		var maxWidth = element.length;
		data.forEach(function(cur) {
			var curLen = cur[element].toString().length;
			if (curLen > maxWidth)
				maxWidth = curLen;
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

	// (3) Header lines array
	cnt = 0;
	var headlin = key.map(function(element) {
		var width = widths[cnt];
		var widthdiff = width - (element.toString().length);
		cnt++;
		return new HeadLin(new Cell(element.toString(), widthdiff), width);
	});

	// (4) Main data array
	var main = data.map(function(line) {
		var cnt = 0;
		return key.map(function(element) {
			var width = widths[cnt];
			cnt++;
			var spaces = (width - line[element].toString().length);
			// return new Cell(line[element].toString(), spaces);
			return new Cell(line[element], spaces);
		});
	});
	return [ header ].concat([ headlin ], main);
};
// --------------------------------------------------
function writeTable(data) {
	data.map(function(row) {
		var newArr = [];
		row.map(function(line) {
			newArr.push(line.draw());
		})
		console.log(newArr.join("  "));
	})
};
// --------------------------------------------------
writeTable(createTable(data));