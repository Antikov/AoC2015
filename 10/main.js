var fs = require("fs");
var input = fs.readFileSync("input").toString().trim();

function las (string) {
  var result = "";
  var i = 0;

  while (i < string.length) {
    var char = string[i];
    var charCount = 0;

    while (string[i] == char) {
      charCount++;
      i++;
    }
    
    result += charCount.toString() + char;
  }
  
  return result;
}

var answer = input;

for (var i = 0; i < 50; i++) {
  answer = las(answer);
//  console.log(answer);
}

console.log(answer.length);