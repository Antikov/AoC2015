var fs = require("fs");

var niceCount = 0;

fs.readFile('input', function (err, data) {
  data.toString().split("\n").forEach(function(str) {
    if (
      str.split(/(..).*\1/g).length > 1 &&
      str.split(/(.).{1}\1/g).length > 1
      )
       {
         niceCount++;
       }
  });
  
  console.log(niceCount);
});