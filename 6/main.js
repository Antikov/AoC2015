var fs = require("fs");
var data = fs.readFileSync("input").toString().trim();

var gridSize = 1000;
var grid = new Array(gridSize);
var cell = new Array(gridSize);

for (var i = 0; i < gridSize; i++)
  cell[i] = false;
for (var i = 0; i < gridSize; i++)
  grid[i] = [].concat(cell);


data.split("\n").forEach(function(input) {
  var coord = input.match(/\d+/g).map(function (res) {
    return parseInt(res);
  });

  if (input[1] == "o") {
    for (var i = coord[0]; i <= coord[2]; i++)
    for (var j = coord[1]; j <= coord[3]; j++)
      grid[i][j] = !grid[i][j];
  }
  else if (input[6] == "n") {
    for (var i = coord[0]; i <= coord[2]; i++)
    for (var j = coord[1]; j <= coord[3]; j++)
      grid[i][j] = true;
  }
  else {
    for (var i = coord[0]; i <= coord[2]; i++)
    for (var j = coord[1]; j <= coord[3]; j++)
      grid[i][j] = false;
  }
});

var answer = 0;
for (var i = 0; i < grid.length; i++)
for (var j = 0; j < grid.length; j++)
  if (grid[i][j])
    answer++;

console.log(answer);