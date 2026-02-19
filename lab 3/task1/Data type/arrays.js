//task1.  Is array copied?
let fruits = ["Apples", "Pear", "Orange"];
let shoppingCart = fruits;
shoppingCart.push("Banana");
alert( fruits.length ); // 4

//task2. Array operations.
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert( styles.shift() );
styles.unshift("Rap", "Reggae");

//task3.Calling in an array context
let arr = ["a", "b"];
arr.push(function() {
  alert( this );
});
arr[2](); // a,b,function(){...}

//task4.summ input numbers
function sumInput() {
  let numbers = [];
  while (true) {
    let value = prompt("A number please?", 0);
    if (value === "" || value === null || !isFinite(value)) break;
    numbers.push(+value);
  }
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
alert( sumInput() );

//task5.A maximal subarray
function getMaxSubSum(arr) {
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}
alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100