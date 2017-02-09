var firstCon = function (str) {
  
  // var regexp  = /(..).*\1/g;
  for (var i = 0; i < str.length - 1; i++) {
    var sub = str.substr(i,2);
    if (str.split(sub).length > 2) {
      return true;
    }
  }
  return false;
}

var secondCon = function(str) {
  
  // var regexp = /(.).{1}\1/g;
  for (var i = 1; i < str.length - 1; i++) {
    if (str[i - 1] == str[i + 1]) {
      return true;
    }
  }
  return false;
}

var fs = require("fs");
var niceCount = 0;
fs.readFile('input', function (err, data) {
  data.toString().split("\n").forEach(function(str) {
    if (firstCon(str) && secondCon(str)) {
      niceCount++;
    }
  });
  
  console.log(niceCount);
});