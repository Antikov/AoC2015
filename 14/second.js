var fs = require("fs");
var input = fs.readFileSync("input").toString().trim();

var time = 2503;
var reinder = [];

function emulate(speed, speedTime, restTime) {
    var i = 0;
    var j = 0;
    var distance = 0;
    var result = [];
    while (i < time) {
        if (j < speedTime) {
            j++;
            i++;
            distance += speed;
            result.push(distance);
        } else {
            i += restTime;
            j = 0;
            for(var q = 0; q < restTime; q++) {
                result.push(distance);
            }
        }
    }
    
    return result;
}

input.split("\n").forEach(function(data) {
    var value = data.match(/\d+/g);
    var name = data.split(" ")[0];
    reinder.push([name, 0, emulate(+value[0], +value[1], +value[2])]);
});

for (var i = 0; i < time; i++) {
    var dist = [];

    for (var j = 0; j < reinder.length; j++) {
        dist.push(reinder[j][2][i]);
    }
    
    var max = Math.max.apply(null, dist);
    
    for (var j = 0; j < reinder.length; j++) {
        if (reinder[j][2][i] == max) {
            reinder[j][1]++;
        }
    }
}

reinder.sort(function(a, b) {
    return b[1] - a[1];
})

console.log(reinder[0][1]);