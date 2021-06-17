
var x = "";
function my_function(n) {
  if (n >= 1) {
    x += n + " ";
    my_function(n - 1);
  } else {
    return x;
  }
  x = x.split(" ").reverse().join(" ");
  return x
}

my_function(9);
console.log(x);
