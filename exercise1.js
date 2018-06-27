//Write a loop that makes seven calls to console.log to output the following
//triangle:
//#
//##
//###
//####
//#####
//######
//#######

var line = "";

for (var cnt = 0; cnt < 7; cnt++) {
	line = line + "#";
	console.log(line + line.length);
}

line = "";
var line2 = "";

for (var cnt = 0; cnt < 7; cnt++) {
	line = line + "#";
	line2 = line2 + (line + "\n");
}
console.log(line2);
console.log(line2.length);