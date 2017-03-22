var x = {};

function test(xx, y) {
  var x = Object.assign({}, xx);
  console.log(x,y);
  if (y < 5) {
    y += 1;
    x[y] = y;
    test(x,y);
    test(x,y);
  }
}

test(x,4);