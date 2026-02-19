//task1. Is "else" required?
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');  //No difference!In both cases, return confirm('Did parents allow you?') executes exactly when the if condition is falsy.
}

//task2 .Rewrite the function using '?' or '||'
//Make two variants of checkAge:
//1.Using a question mark operator ?
//2.Using OR ||

/*function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}*/
function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}
function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}

//task3.Function min(a, b)
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
//task4. Function pow(x,n)
function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}
let x = prompt("x?", '');
let n = prompt("n?", '');
if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert( pow(x, n) );
}

//array task1
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);
