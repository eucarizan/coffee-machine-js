const input = require('sync-input');

let water = 200;
let milk = 50;
let beans = 15;
function multiply(cups) {
  water *= cups;
  milk *= cups;
  beans *= cups;
}

let cups = input("Write how many cups of coffee you will need:");
multiply(cups);
let output = `For ${cups} cups of coffee you will need:
${water} ml of water
${mlik} ml of milk
${beans} g of coffee beans`;

console.log(output);
