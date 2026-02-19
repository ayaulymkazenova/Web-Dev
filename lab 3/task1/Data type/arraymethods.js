//task1.Translate border-left-width to borderLeftWidth
function camelize(str) {
  return str
    .split('-') // бөлу
    .map((word, index) => {
      if (index === 0) return word; 
      return word[0].toUpperCase() + word.slice(1);
    })
    .join('');
}
alert(camelize("background-color")); // backgroundColor
alert(camelize("list-style-image")); // listStyleImage
alert(camelize("-webkit-transition")); // WebkitTransition

//task2
function filterRange(array, a, b) {
  // added brackets around the expression for better readability
  return array.filter(item => (a <= item && item <= b));
}
let array = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (matching values)
alert( array ); // 5,3,8,1 (not modified)

//task3
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    // remove if outside of the interval
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
alert( arr ); // [3, 1]

//task4
let ar = [5, 2, 1, -10, 8];
ar.sort((a, b) => b - a);
alert( ar );
//task5
function copySorted(ara) {
  return ar.slice().sort();
}
let ara = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(ara);
alert( sorted );
alert( ara );
//task6
function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };
  this.calculate = function(str) {
    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];
    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return this.methods[op](a, b);
  };
  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}
//task7
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [ john, pete, mary ];
let names = users.map(item => item.name);
alert( names ); // John, Pete, Mary
//task8
let joohn = { name: "John", surname: "Smith", id: 1 };
let peete = { name: "Pete", surname: "Hunt", id: 2 };
let maary = { name: "Mary", surname: "Key", id: 3 };

let userss = [ joohn, peete, maary ];
let userssMapped = userss.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));
/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/
alert( userssMapped[0].id ); // 1
alert( userssMapped[0].fullName ); // John Smith
//task9
function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}
let johnn = { name: "John", age: 25 };
let petee = { name: "Pete", age: 30 };
let maryy = { name: "Mary", age: 28 };
let arraa = [ petee, johnn, maryy ];
sortByAge(arraa);
// now sorted is: [john, mary, pete]
alert(arraa[0].name); // John
alert(arraa[1].name); // Mary
alert(arraa[2].name); // Pete
//task10
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};
for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}
for (let key in count) {
  alert(`${key}: ${count[key]}`);
}
//task11
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
let johni = { name: "John", age: 25 };
let peter = { name: "Pete", age: 30 };
let marya = { name: "Mary", age: 29 };
let arraay = [ johni, peter, marya];
alert( getAverageAge(arraay) ); // 28
//task12
function unique(arr) {
  let result = [];
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
alert( unique(strings) ); // Hare, Krishna, :-O

//task13
function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}