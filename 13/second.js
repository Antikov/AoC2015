var fs = require("fs");
var input = fs.readFileSync("input").toString().trim();
var guestList = [];
var happiness = {};

var answer = Number.MIN_SAFE_INTEGER;

function backtrack (guest, guests, sum, firstGuest) {
  if (guests.length == 0) {
    sum += happiness[guest + ":" + firstGuest];
    sum += happiness[firstGuest + ":" + guest];
    if (sum > answer) {
      answer = sum;
    }
    return 0;
  }
  
  for (var i = 0; i < guests.length; i++) {
    var newGuestList = [].concat(guests);
    newGuestList.splice(i, 1);
    
    if (guest.length == 0) {
      backtrack(guests[i], newGuestList, 0, guests[i]);
    }
    else {
      backtrack(guests[i], newGuestList, sum + happiness[guest + ":" + guests[i]] + happiness[guests[i] + ":" + guest], firstGuest);
    }
  };
};

input.split("\n").forEach(function(data) {

  var value = data.match(/\d+/g)[0];
  value = data.match(" lose ") ? -value : +value;

  var temp = data.split(" ");
  var guest1 = temp[0];
  var guest2 = temp[temp.length - 1];
  guest2 = guest2.substr(0,guest2.length - 1);
  
  if (guestList.indexOf(guest1) == -1) {
    guestList.push(guest1);
  }
  
  happiness[guest1 + ":" + guest2] = value;
});

var me = "KirillAntikov";

for (var i = 0; i < guestList.length; i++) {
  happiness[me + ":" + guestList[i]] = 0;
  happiness[guestList[i] + ":" + me] = 0;
}

guestList.push(me);

backtrack('', guestList, 0, '');

console.log(guestList);
console.log(happiness);

console.log(answer);