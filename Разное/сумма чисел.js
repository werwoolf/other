let n = 76666667;
let x = 0;
function testCycle(n) {
  
  var j = n.toString().length;
  for (let i = 1; i <= j; i++ ) {
  x += n %10;
  n = Math.trunc(n/10)
  
}
куе
}
testCycle(n)
