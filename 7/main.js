var fs = require("fs");
var data = fs.readFileSync("input.1").toString().trim();

function uint16(val) {
  return val & 0xFFFF >>> 0;
}
var i = ~uint16(65534);

//console.log(i);