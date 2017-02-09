var fs = require("fs");
var md5 = require('md5');

fs.readFile('input', function (err, data) {
  var key = data.toString();
  for (var i = 1; ; i++) {
    var hash = md5(key + i.toString());
    if (hash.substr(0,6) == "000000") {
      console.log(i);
      break;
    }
  }
});