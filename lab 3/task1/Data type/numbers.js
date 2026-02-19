//task1
let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");
alert( a + b );

//task2.Why 6.35.toFixed(1) == 6.3?
alert( 6.35.toFixed(1) ); // 6.3
alert( (6.35 * 10).toFixed(20) ); // 63.50000000000000000000
alert( Math.round(6.35 * 10) / 10 ); // 6.35 -> 63.5 -> 64(rounded) -> 6.4

//task3.Repeat until the input is a number
function readNumber() {
  let num;
  do {
    num = prompt("Enter a number please?", 0);
  } while ( !isFinite(num) );
  if (num === null || num === '') return null;
  return +num;
}
alert(`Read: ${readNumber()}`);

//task4. An occasional infinite loop
/*let i = 0;
while (i != 10) {
  i += 0.2;
}*/

let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) alert( i );
}

//task5. A random number from min to max
function random(min, max) {
  return min + Math.random() * (max - min);
}
alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );

//task6. random integer from min to max 
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
alert(randomInteger(1, 5));
alert(randomInteger(1, 5));
alert(randomInteger(1, 5));
