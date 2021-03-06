// Drawing a table
// --------------------------------------------------
const MOUNTAINS = require("./mountains");
// --------------------------------------------------
function rowHeights(rows) {
	return rows.map(function(row) {
		return row.reduce(function(max, cell) {
			return Math.max(max, cell.minHeight());
		}, 0);
	});
}
// --------------------------------------------------
function colWidths(rows) {
	return rows[0].map(function(_, i) {
		return rows.reduce(function(max, row) {
			return Math.max(max, row[i].minWidth());
		}, 0);
	});
}
// --------------------------------------------------
function drawTable(rows) {
	var heights = rowHeights(rows);
	var widths = colWidths(rows);
	function drawLine(blocks, lineNo) {
		return blocks.map(function(block) {
			return block[lineNo];
		}).join(" ");
	}

	function drawRow(row, rowNum) {
		console.log(row);
		var blocks = row.map(function(cell, colNum) {	
			return cell.draw(widths[colNum], heights[rowNum]);
		});
		return blocks[0].map(function(_, lineNo) {
			return drawLine(blocks, lineNo);
		}).join("\n");
	}

	return rows.map(drawRow).join("\n");
}
// --------------------------------------------------
function repeat(string, times) {
	var result = "";
	for (var i = 0; i < times; i++)
		result += string;
	return result;
}
// --------------------------------------------------
// RTextCell object
// --------------------------------------------------
function RTextCell(text) {
	TextCell.call(this, text);
}

RTextCell.prototype = Object.create(TextCell.prototype);

RTextCell.prototype.draw = function(width, height) {
	var result = [];
	for (var i = 0; i < height; i++) {
		var line = this.text[i] || "";
		result.push(repeat(" ", width - line.length) + line);
	}
	return result;
};
// --------------------------------------------------
// TextCell object
// --------------------------------------------------
function TextCell(text) {
	this.text = text.split("\n");
}
// TextCell methods:
// (1) minWidth
TextCell.prototype.minWidth = function() {
	return this.text.reduce(function(width, line) {
		return Math.max(width, line.length);
	}, 0);
};
// (2) minHeight
TextCell.prototype.minHeight = function() {
	return this.text.length;
};
// (3) draw
TextCell.prototype.draw = function(width, height) {
	var result = [];
	for (var i = 0; i < height; i++) {
		console.log(this.text, i);
		var line = this.text[i] || "";
		result.push(line + repeat(" ", width - line.length));
	}
	return result;
};
// --------------------------------------------------
// UnderlinedCell object
// --------------------------------------------------
function UnderlinedCell(inner) {
	this.inner = inner;
}
// UnderlinedCell methods:
// (1) minWidth
UnderlinedCell.prototype.minWidth = function() {
	return this.inner.minWidth();
};
// (2) minHeight
UnderlinedCell.prototype.minHeight = function() {
	return this.inner.minHeight() + 1;
};
// (3) draw
UnderlinedCell.prototype.draw = function(width, height) {
	return this.inner.draw(width, height - 1).concat([ repeat("-", width) ]);
};
// --------------------------------------------------
function dataTable(data) {
	var keys = Object.keys(data[0]);
	var headers = keys.map(function(name) {
		return new UnderlinedCell(new TextCell(name));
	});
	var body = data.map(function(row) {
		return keys.map(function(name) {
			var value = row[name];
			if (typeof value == "number")
				return new RTextCell(String(value));
			else
				return new TextCell(String(value));
		});
	});
	return [ headers ].concat(body);
}
// --------------------------------------------------
console.log(drawTable(dataTable(MOUNTAINS)));