var fs = require("fs");

// Synchronous read
var data = fs.readFileSync('input').toString();

var flag = false;

var count = 0;
for (var i = 0; i < data.length; i++) {
    if (data[i] == '(') {
        count++;
    } else if (data[i] == ')') {
        count--;
    }
    
    if(count == -1 && !flag) {
        flag = true;
        console.log(i + 1);
    }
        
}
console.log(count);