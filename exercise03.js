//Write a program that creates a string that represents an 88 grid, using
//newline characters to separate lines. At each position of the grid there
//is either a space or a “#” character. The characters should form a chess
//board.
//Passing this string to console.log should show something like this:
// # # # #
//# # # #
// # # # #
//# # # #
// # # # #
// # # # #
//# # # #
// # # # #

var size = 20, line = "";

for (var i = 1; i <= size; i++) {
	for (var j = 1; j <= size; j++) {
		if (j % 2 == 0)
			if (i % 2 == 0)
				line += " ";
			else
				line += "#";
		else if (i % 2 == 0)
			line += "#";
		else
			line += " ";
	}
	line += "\n";
}
console.log(line);