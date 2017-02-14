var fs = require("fs");
var input = fs.readFileSync("input").toString().trim();

var time = 2503;
var reinder = [];

function emulate(speed, speedTime, restTime) {
    var i = 0;
    var j = 0;
    var distance = 0;
    while (i < time) {
        if (j < speedTime) {
            j++;
            i++;
            distance += speed;
        } else {
            i += restTime;
            j = 0;
        }
    }
    
    return distance;
}

input.split("\n").forEach(function(data) {
    var value = data.match(/\d+/g);
    var name = data.split(" ")[0];
    reinder.push([name, emulate(+value[0], +value[1], +value[2])]);
});

reinder.sort(function(a, b) {
    return b[1] - a[1];
})

console.log(reinder[0]);