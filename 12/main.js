var fs = require("fs");
var input = fs.readFileSync("input").toString().trim();

var answer = 0;
input.match(/-?\d+/g).forEach(function(val) {
    answer += +val;
});

console.log(answer);