var fs = require("fs");
var input = fs.readFileSync("input").toString().trim().split("\n");

var newGrid = input.map( n => n.split("").map( n => n=="#" ? 1 : 0));

var totalStep = 100;
var gridSize = newGrid.length;

function viewGrid(grid) {
  grid.forEach( n => console.log(n.join("")));
}

function adjustGrid(grid) {
  var offLight = "0";
  var newGridSize = grid.length + 2;
  var turnOffString = offLight.repeat(newGridSize);
  var turnOffArray = turnOffString.split("").map( n => parseInt(n));
  
  var newGrid = grid.map( n => [offLight].concat(n).concat(offLight));
  newGrid.unshift(turnOffArray);
  newGrid.push(turnOffArray);
  return newGrid;
}

for (var step = 0; step < totalStep; step++) {
  var grid = adjustGrid(newGrid);
  newGrid = [];
  //viewGrid(grid);
  for (var i = 1; i <= gridSize; i++) {
    var row = [];
    for (var j = 1; j <=gridSize; j++) {
      var sum =
      +grid[i - 1][j - 1]  + 
      +grid[i - 1][j] + 
      +grid[i - 1][j + 1] +
      +grid[i][j - 1] +
      +grid[i][j + 1] +
      +grid[i + 1][j - 1] +
      +grid[i + 1][j] +
      +grid[i + 1][j + 1]
      ;
      //console.log(i + " " + j + " " + sum);
      if (
        (grid[i][j] && (sum == 2 || sum == 3)) ||
        (!grid[i][j] && sum == 3)
        ) {
          row.push(1);
        } else {
          row.push(0);
        }
    }
    newGrid.push(row);
  }
  //viewGrid(newGrid);
}

var answer = 0;
newGrid.forEach( n => n.forEach( n => answer += n));

console.log(answer);