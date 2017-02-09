var fs = require("fs");

function uniq(cX, cY, houses) {
  for (var i = 0; i < houses.length; i++) {
    if (houses[i][0] == cX && houses[i][1] == cY) {
      return false;
    }
  }
  return true;
}

// Asynchronous read
fs.readFile('input', function (err, data) {
  var coordXX = 0;
  var coordXY = 0;
  var coordYX = 0;
  var coordYY = 0;
  var houses = [[0, 0]];
  data = data.toString();
  
  for (var i = 0 ; i < data.length; i+=2) {
    switch (data[i]) {
      case '>': 
        coordXX++;
        break;
      case '<': 
        coordXX--;
        break;
      case '^': 
        coordXY++;
        break;
      case 'v':
        coordXY--;
        break;
      default:
        console.error("What The Fuck?!");
    }
    
    switch (data[i + 1]) {
      case '>': 
        coordYX++;
        break;
      case '<': 
        coordYX--;
        break;
      case '^': 
        coordYY++;
        break;
      case 'v':
        coordYY--;
        break;
      default:
        console.error("What The Fuck?!");
    }


    if (uniq(coordXX, coordXY, houses)) {
      houses.push([coordXX, coordXY]);
    }
    
    if(uniq(coordYX, coordYY, houses)) {
      houses.push([coordYX, coordYY]);
    }
  };

  console.log(houses.length);
});