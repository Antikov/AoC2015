var fs = require("fs");
var input = fs.readFileSync("input").toString().trim().split("\n");

var source = input.pop();
input.pop();

var molecules = source.match(/[A-Z]/g).length;

var Ar = source.match(/Ar/g).length;
var Rn = source.match(/Rn/g).length;
var Y = source.match(/Y/g).length;
if (Ar != Rn) {
    console.log("Invalid input molecule");
}

var answer = molecules - 2 * Y - Rn - Ar - 1;

console.log(answer);