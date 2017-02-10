var fs = require("fs");
var input = fs.readFileSync("input").toString().trim().split("\n");
var wire = {};



function gate(command, a, b) {
  switch (command) {
    case 'AND':
      return a & b & 0xFFFF;
    case 'OR':
      return a | b & 0xFFFF;
    case 'NOT':
      return ~b & 0xFFFF;
    case 'LSHIFT':
      return a << b & 0xFFFF;
    case 'RSHIFT':
      return a >> b & 0xFFFF;
    default:
      console.log("Wrong command!");
      return undefined;
  }
}


while (Object.keys(wire).length < input.length) {
  input.forEach(function(str) {
    var signal = str.split("->")[0].trim();
    var outputWire = str.split("->")[1].trim();
    if (!wire.hasOwnProperty(outputWire)) {

      var command = signal.match(/[A-Z]+/g);
      if (command) {
        
        command = command[0];

        var a = signal.split(command)[0].trim();
        var b = signal.split(command)[1].trim();
        
        if (isNaN(a) && wire.hasOwnProperty(a)) {
          a = wire[a];
        }
        
        if (isNaN(b) && wire.hasOwnProperty(b)) {
          b = wire[b];
        }
        
        if (!isNaN(a) && !isNaN(b)) {
          wire[outputWire] = gate(command, +a, +b);
        }
      }
      else {
        if (!isNaN(signal)) {
          wire[outputWire] = +signal;
        }
        else if (wire.hasOwnProperty(signal)) {
          wire[outputWire] = wire[signal];
          console.log(outputWire);
        }
      }
    }
  });
}
console.log(wire);

console.log(wire["a"]);