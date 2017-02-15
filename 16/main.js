var fs = require("fs");
var input = fs.readFileSync("input").toString().trim();

var aunt = {
  children: 3,
  cats: 7,
  samoyeds: 2,
  pomeranians: 3,
  akitas: 0,
  vizslas: 0,
  goldfish: 5,
  trees: 3,
  cars: 2,
  perfumes: 1
}

var auntList = [];

input.split("\n").forEach(function(data){
  var name = data.split(":")[0];
  var newAunt = {
    name : name
  };
  var match = data.match(/\w+: \d+/g);

  for (var i in match) {
    var temp = match[i].split(": ");
    newAunt[temp[0]] = +temp[1];
  }
  auntList.push(newAunt);
});

for (var i in auntList) {
  var match = true;
  for (var key in auntList[i]) {
    if (aunt.hasOwnProperty(key) && aunt[key] != auntList[i][key]) {
      match = false;
    }
  }
  
  if (match) {
    console.log(auntList[i].name);
  }
}