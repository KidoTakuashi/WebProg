var a = prompt("a");
var b = prompt("b");
if(typeof a == Number){
  alert("0000")
}
var x = parseInt(a);
var y = parseInt(b);

alert((x + y) + "\n" + (x - y) + "\n" + (x * y) + "\n" + (x / y));
console.log((x + y) + "\n" + (x - y) + "\n" + (x * y) + "\n" + (x / y));


var a = prompt("a");
var b = prompt("b");

var x = parseInt(a);
var y = parseInt(b);

var sum = 0;
for (var i = x; i <= y; i++) {
  sum += i;
}

alert(sum);

console.log(sum)
