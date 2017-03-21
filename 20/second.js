var fs = require("fs");
var input = fs.readFileSync("input").toString().trim();
var mul = 11;
var stopAfter = 50;

var presentCount = 0;
var houseNumber = 0;

while (presentCount < input) {
  houseNumber++;
  presentCount = 0;
  for (var i = 1; i <= stopAfter; i++) {
    if (houseNumber % i == 0) {
      presentCount += (houseNumber / i) * mul;
    }
  }
}

console.log(houseNumber);