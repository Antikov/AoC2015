var fs = require("fs");
var input = fs.readFileSync("input").toString().trim().split("\n").map(function(value) {
  return parseInt(value);
});

var possibleGroups = [];
var solutions = {};

var firstGroup = "";
var minGroupLen = input.length;

var use = [];
input.forEach(function(value) {
  use.push(false);
});

function unusedElements() {
  return input.filter(function(value, index) {
    return !use[index];
  });
}

function usedElements() {
  return input.filter(function(value, index) {
    return !use[index];
  });
}

function backtrack(current1, current2, firstGroupLen) {
  if (current1 == 0 && current2 == 0) {
    var solution = unusedElements();
    if (!solutions.hasOwnProperty(solution.join("-"))) {
      possibleGroups.push(solution);
      solutions[solution.join("-")] = true;
      console.log(solution);
    }
    return;
  }
  
  if (current1 == 0) {
    firstGroup = usedElements().join("-");
    backtrack(current2, current1);
    return;
  }

  input.forEach(function(value, index) {
    if (!use[index] && current1 >= value) {
      use[index] = true;
      backtrack(current1 - value, current2);
      use[index] = false;
    }
  });
}

var sum = input.reduce(function(a,b) { return a + b; });
backtrack(sum / 3, sum / 3, 0);

//console.log(possibleGroups);

var minLen = possibleGroups.map(function(value) {return value.length;}).sort(function(a,b) {return a-b;})[0];
console.log(minLen);
possibleGroups = possibleGroups.filter(function(value) {
  return value.length == minLen;
});

console.log(possibleGroups);
var qe = possibleGroups.map(function(value) {
  var multiple = value.reduce(function(a,b) {
    return a * b;
  });
  
  return multiple;
});

qe.sort(function(a,b) {return a-b;});

console.log(qe[0]);