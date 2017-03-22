var fs = require("fs");
var input = fs.readFileSync("input").toString().trim().split("\n");

var registers = {"a":0, "b":0};
var instructions = input.map(function(value) {
  return value.split(" ");
});

var current = 0;

while(current < instructions.length && current >= 0) {
  var command = instructions[current][0];
  var register = instructions[current][1];
  register = register.endsWith(",") ? register.slice(0, register.length - 1): register;
  var offset = instructions[current].length == 3 ? parseInt(instructions[current][2]) : 0;
  offset = command == "jmp" ? parseInt(register) : offset;

  if (command == "hlf") {
    registers[register] = Math.floor(registers[register] / 2);
    current++;
  } else
  if (command == "tpl") {
    registers[register] = registers[register] * 3;
    current++;
  } else
  if (command == "inc") {
    registers[register]++;
    current++;
  } else
  if (command == "jmp") {
    current += offset;
  } else
  if (command == "jie") {
    current += registers[register] % 2 == 0 ? offset : 1;
  } else
  if (command == "jio") {
    current += registers[register] == 1 ? offset : 1;
  } else
    break;
}

console.log(registers["b"]);