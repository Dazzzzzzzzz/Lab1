// Lab 1
// 1.1

function f(n) {
    var arr = [];
    for(var i = 0; i < n; i++)
        arr.push(i);
    return arr;
}
//console.log(f(7))


// 1.2
function s(a,b,c) {
  if (a % b == 0 && a % c == 0) {
    console.log("true")
  }
  else {
    console.log("false")
  }
}
//console.log(s(-12,6,-6))
//console.log(s(12,6,7))


// 1.3
function capitalize(str) {

  if ( str.length >= 1 && str.length <= 10) {

    return str[0].toUpperCase() + str.slice(1);
 }

  else {
    console.log("Error")
  }
}
//console.log( capitalize("work") );
