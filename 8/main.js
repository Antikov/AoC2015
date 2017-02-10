var fs = require("fs");
var input = fs.readFileSync("input").toString().trim();
var answer = 0;

input.split("\n").forEach(function(source) {
  var result = source.slice(1,source.length - 1);

  result = result.replace(/\\x[a-f0-9]{2}/g,"a");
  result = result.replace(/\\\\/g,"a");
  result = result.replace(/\\\"/g,"a");

  answer += source.length - result.length;
  console.log(source + " " + result);

});

console.log(answer);