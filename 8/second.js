var fs = require("fs");
var input = fs.readFileSync("input").toString().trim();
var answer = 0;

input.split("\n").forEach(function(source) {
  var result = '"' + source.replace(/[\\\"]{1}/g,"aa") + '"';

  answer += result.length - source.length;
  console.log(source + " " + result);

});

console.log(answer);