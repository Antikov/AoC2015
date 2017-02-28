var fs = require("fs");
var containers = fs.readFileSync("input").toString().trim().split("\n").map( n => Number(n));
var totalLiters = 150;

var possible= [];

containers.sort( (a, b) => b - a);

function backtrack(sum, left, used) {
  var ret = 0;
  for (var i = 0; i < left.length; i++) {
    var newSum = sum - left[i];
    var newUsed = used.concat(left[i]);
    if (newSum == 0) {
      ret++;
      possible.push(newUsed);
    } else if (newSum > 0) {
      var newleft = left.slice(i + 1,left.length).filter(n => n <= newSum);
      ret += backtrack(newSum, newleft, newUsed);
    }
  }
  return ret;
}

var answer = backtrack(totalLiters, containers, []);

var min = Math.min.apply(this, possible.map( n => n.length));
possible = possible.filter( n => n.length == min);

console.log(possible.length);