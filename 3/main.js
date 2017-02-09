var fs = require("fs");

// Asynchronous read
fs.readFile('input', function (err, data) {
  var answer = 0;

  var coordX = 0;
  var coordY = 0;
  var houses = [];
  houses[0] = [0, 0];
  data.toString().split("").forEach(function(el, index) {
    switch (el) {
      case '>': 
        coordX++;
        break;
      case '<': 
        coordX--;
        break;
      case '^': 
        coordY++;
        break;
      case 'v':
        coordY--;
        break;
      default:
        console.error("What The Fuck?!");
    }
    
    var uniq = true;
    for (var i = 0; i < houses.length; i++) {
      if (houses[i][0] == coordX && houses[i][1] == coordY) {
        uniq = false;
        break;
      }
    }
    
    if (uniq){
      houses.push([coordX, coordY]);
    }
  });

  console.log(houses.length);
});