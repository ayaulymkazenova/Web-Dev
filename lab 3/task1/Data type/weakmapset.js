//task1
let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];
let readMessages = new WeakSet();
// оқылды деп белгілейміз
readMessages.add(messages[0]);
readMessages.add(messages[1]);
// тексеру
alert(readMessages.has(messages[0])); // true
alert(readMessages.has(messages[2])); // false

//task2
let messagess = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];
let readMap = new WeakMap();
// дата сақтау
readMap.set(messagess[0], new Date());
readMap.set(messagess[1], new Date());
// тексеру
alert(readMap.get(messagess[0])); // дата