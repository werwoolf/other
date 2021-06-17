let x = 1;
let ost = 1 ;
function testCycle(a, b) {
    //А Больше Б
 if(a % b != 0 && a>b )
    while(ost!=0){
        x = ost;
        ost = a % b;
        a = b;
        b = ost;
console.log(x)
// без остатка А Больше Б
  }else if(a % b == 0 && a>=b){
    x = b;

    console.log(x)
    // B Больше A
  }else if(b % a != 0 && a<b )
  while(ost!=0){
      x = ost;
      ost = b % a;
      b = a;
      a = ost;
      console.log(x)
    }// без остатка А меньше Б
  else if(b % a == 0 && a<=b){
    x = a;
    console.log(x)
  }
 
}

testCycle(99, 1892)