let n = 666;

function testCycle(n) {

let x = "";
for(; n>0; ){

  if( n % 2 == 0){
    x += 0+' ';
    
  }else{
    x += 1+" ";
  }
n=(Math.trunc(n/2));

}
x= x.split("").reverse().join('');
console.log(x)
return x;
}


testCycle(42)
