var fs = require("fs");
var input = fs.readFileSync("input.1").toString().trim();

function nextLetter(letter) {
  if (letter == "z") {
    return "a";
  }
  return String.fromCharCode(letter.charCodeAt(0) + 1);
}

function nextPassword (pass) {
  var i = pass.length - 1;
  var result = pass.split("");

  while (result[i] == "z" && i >= 0) {
    result[i] = "a";
    i--;
  }

  if(i != -1) {
    result[i] = nextLetter(result[i]);
  }

  return result.join("");
}

function checkValid (pass) {
  
  if (pass.match(/[iol]/g)) {
    return false;
  }

  if (!pass.match(/(.)\1[a-z]*(.)\2/g)) {
    return false;
  }

  if (pass.length < 3) {
    return false;
  }
  
  for (var i = 0; i < pass.length - 2; i++) {
    if ((pass[i + 2].charCodeAt(0) - pass[i + 1].charCodeAt(0) == 1) && (pass[i + 1].charCodeAt(0) - pass[i].charCodeAt(0) == 1)) {
      return true;
    }
  }
  return false;

}

do {
  input = nextPassword(input);
} while (!checkValid(input));

console.log (input);