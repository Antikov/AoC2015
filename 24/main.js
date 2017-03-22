var fs = require("fs");
var input = fs.readFileSync("input").toString().trim().split("\n").map(function(value) {
  return parseInt(value);
});

input.sort(function(a,b) {return b-a;});

var solutions = {};

var minGroupLen = input.length;

function backtrack(group1, group2, remaining, current1, current2) {
  if (current1 == 0 && current2 == 0) {
    minGroupLen = group1.length < minGroupLen ? group1.length : minGroupLen;
    if (minGroupLen == group1.length && !solutions.hasOwnProperty(group1.join("-"))) {
      solutions[group1.join("-")] = group1;
      //console.log(group1, minGroupLen);
    }
    return;
  }
  
  if (current1 == 0) {
    remaining.forEach(function(value, index) {
      if (!solutions.hasOwnProperty(group1.join("-")) && current2 >= value && (group2.length ==0 || group2[group2.length - 1] >= value)) {
        var newGroup1 = group1.slice();
        var newGroup2 = group2.concat([value]);
        var newRemaining = remaining.slice(0,index-1).concat(remaining.slice(index+1));
        backtrack(newGroup1, newGroup2, newRemaining, current1, current2 - value);
      }
    });
    return;
  }
  
  remaining.forEach(function(value, index) {
      if (current1 >= value && minGroupLen > group1.length && (group1.length == 0 || group1[group1.length - 1] >= value)) {
        var newGroup1 = group1.concat([value]);
        var newGroup2 = group2.slice();
        var newRemaining = remaining.slice(0,index).concat(remaining.slice(index+1));
        backtrack(newGroup1, newGroup2, newRemaining, current1 - value, current2);
      }
  });
}

var sum = input.reduce(function(a,b) { return a + b; });

backtrack([],[],input,sum / 3, sum / 3);

//console.log(possibleGroups);

//console.log(minGroupLen);

var qe = [];
Object.keys(solutions).forEach(function(value) {
  if (solutions[value].length == minGroupLen) {
    var calculated = solutions[value].reduce(function(a,b) { return a * b;});
    qe.push(calculated);
  }
});

qe.sort(function(a,b) {return a-b;});

console.log(qe[0]);