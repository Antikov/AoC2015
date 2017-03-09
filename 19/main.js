var fs = require("fs");
var input = fs.readFileSync("input").toString().trim().split("\n");

var source = input.pop();
input.pop();


var all = {};

function makeNewString(string, index, source, replace) {
    var len = source.length;
    
    return string.substring(0,index) + replace + string.substring(index + len);
}

input.forEach(function(data) {
    var temp = data.match(/(\w+) => (\w+)/);

    var index = source.indexOf(temp[1]);
    
    while (index != -1) {
        var newstr = makeNewString(source, index, temp[1], temp[2]);
        all[newstr] = true;
        index = source.indexOf(temp[1], index + 1);
    }
});

console.log(Object.keys(all).length);