var fs = require("fs");
var containers = fs.readFileSync("input").toString().trim().split("\n").map( n => Number(n));
var totalLiters = 150;

containers.sort( (a, b) => b - a);

function backtrack(sum, left) {
  var ret = 0;
  for (var i = 0; i < left.length; i++) {
    var newSum = sum - left[i];
    if (newSum == 0) {
      ret++;
    } else if (newSum > 0) {
      var newleft = left.slice(i + 1,left.length).filter(n => n <= newSum);
      ret += backtrack(newSum, newleft);
    }
  }
  return ret;
}

var answer = backtrack(totalLiters, containers, []);
console.log(answer);