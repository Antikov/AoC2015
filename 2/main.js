var fs = require("fs");
var data = fs.readFileSync('input').toString();

var total = 0;
var ribbon = 0;

data.split("\n").forEach(function(el, index) {
    "use strict";
    let q = el.split("x");
    let x = q[0];
    let y = q[1];
    let z = q[2];
    let m = Math.min(x * y, Math.min(x * z, y * z));
    
    let r = Math.min(x * 2 + y * 2, Math.min(x *2 + z * 2, y * 2 + z * 2));
    
    total += 2 * x * y + 2 * x * z + 2 * y * z + m; 
    
    ribbon += x * y * z + r;
});

console.log(total);
console.log(ribbon);