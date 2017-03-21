var fs = require("fs");
var input = fs.readFileSync("input").toString().trim();

var presentCount = 0;
var houseNumber = 0;

while (presentCount < input) {
  houseNumber++;
  presentCount = 0;
  for (var i = 1; i <= Math.sqrt(houseNumber); i++) {
    if (houseNumber % i == 0) {
      presentCount += i * 10;
      if (i*i != houseNumber) presentCount += (houseNumber / i) * 10;
    }
  }
}

console.log(houseNumber);