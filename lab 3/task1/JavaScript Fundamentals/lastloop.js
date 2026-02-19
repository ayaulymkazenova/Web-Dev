//task1
let i = 3;
while (i) {
  alert( i-- );
} //1

 //task2
let b = 0;
while (++b < 5) alert( b ); //1,2,3,4
let c = 0;
while (c++ < 5) alert( c );//1,2,3,4,5

//task3
for (let i = 0; i < 5; ++i) alert( i );
for (let i = 0; i < 5; i++) alert( i ); //from 0 to 4 in both cases.

//task4. Use the for loop to output even numbers from 2 to 10
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}

//task5
let d = 0;
while (d < 3) {
  alert( `number ${d}!` );
  d++;
}

//task6
let num;
do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

//task7
let n = 10;
nextPrime:
for (let i = 2; i <= n; i++) { // for each i...
  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }
  alert( i ); // a prime
}