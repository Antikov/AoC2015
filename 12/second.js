var fs = require("fs");
var input = fs.readFileSync("input").toString().trim();

var answer = 0;

function objParse (obj) {
    var count = 0;
    var red = false;
    
    for (var key in obj) {
        if (typeof obj[key] == "object" ) {
            count += objParse(obj[key]);
        }
        else {
            if (typeof obj[key] == "number") {
                count += obj[key];
            }
            else if (obj[key] == "red") {
                red = true;
            }
        }
    }
    
    if (!(obj instanceof Array) && (obj instanceof Object) && red) {
        return 0;
    }
    
    return count;
}

var input = JSON.parse(input);

console.log(objParse(input));
