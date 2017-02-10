"use strict"
var fs = require("fs");
var input = fs.readFileSync("input").toString().trim();
var cityList = [];
var distance = {};

var answer = Number.MIN_SAFE_INTEGER;

function backtrack (city, cities, sum) {
//  console.log(city + ' ' + sum.toString());
//  console.log(cities);
  if (cities.length == 0) {
    if (sum > answer) {
      answer = sum;
    }
    return 0;
  }
  
  for (let i = 0; i < cities.length; i++) {
    let newcities = [].concat(cities);
    newcities.splice(i, 1);
    
    if (city.length == 0) {
      backtrack(cities[i], newcities, 0);
    }
    else {
      backtrack(cities[i], newcities, sum + distance[city + ":" + cities[i]]);
    }
  };

};

input.split("\n").forEach(function(data) {
  var path = data.split("=")[0].trim();
  var value = data.split("=")[1].trim();

  var city = path.split(" to ").map(function(val) {
    if (cityList.indexOf(val.trim()) == -1)
      cityList.push(val.trim());
    return val.trim();
  });

  distance[city[0] + ':' + city[1]] = +value;
  distance[city[1] + ':' + city[0]] = +value;
});


backtrack('', cityList, 0);

console.log(answer);