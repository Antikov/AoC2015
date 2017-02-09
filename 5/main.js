var fs = require("fs");

var niceCount = 0;

fs.readFile('input', function (err, data) {
  data.toString().split("\n").forEach(function(str) {
    if (
      str.split(/[aeiou]/g).length > 3 &&
      str.split(/(ab|cd|pq|xy)/g).length ==1 &&
      str.split(/(aa|bb|cc|dd|ee|ff|gg|hh|ii|jj|kk|ll|mm|nn|oo|pp|qq|rr|ss|tt|uu|vv|ww|xx|yy|zz)/g).length > 1
      )
       {
         niceCount++;
       }
  });
  
  console.log(niceCount);
});