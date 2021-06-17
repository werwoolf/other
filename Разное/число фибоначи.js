let prev = 0;
let next = 1;
let trans = 0;
function testCycle(n) {
  for (i = 1; i < n; i++) {
    trans = next + prev;
    prev = next;
    next = trans;
  }
  console.log(trans);
}

testCycle(8);
