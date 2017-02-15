var fs = require("fs");
var input = fs.readFileSync("input").toString().trim();
var ingredient = [];

var teaspoon = 100;
var totalCalories = 500;

input.split("\n").forEach(function (data) {

  var values = data.match(/-?\d+/g);
  ingredient.push({
    name : data.split(":")[0],
    capacity: +values[0],
    durability: +values[1],
    flavor: +values[2],
    texture: +values[3],
    calories: +values[4]
  });
  
});

var max = 0;

function score (used) {
  var capacity = 0;
  var durability = 0;
  var flavor = 0;
  var texture = 0;
  var calories = 0;

  for (var i = 0; i < used.length; i++) {
    capacity += used[i] * ingredient[i].capacity;
    durability += used[i] * ingredient[i].durability;
    flavor += used[i] * ingredient[i].flavor;
    texture += used[i] * ingredient[i].texture;
    calories += used[i] * ingredient[i].calories;
  }

  
  if (capacity < 0 || durability < 0 || flavor < 0 || texture < 0 || calories != totalCalories) {
    return 0;
  }

  var total = capacity * durability * flavor * texture;
  return total;
}

function backtrack (count, used, left) {
  if (left == 1) {
    var total = score(used.concat(count));
//    console.log(used.concat(count));
//    console.log(total)
    max = max < total ? total : max;
    return 0;
  }
  
  for (var i = count; i >= 0; i--) {
    backtrack(count - i, [i].concat(used), left - 1);
  }
}

console.log(ingredient);

backtrack(teaspoon, [], ingredient.length);
console.log(max);