const input = require('sync-input');

let water = 0;
let milk = 0;
let beans = 0;
let cups = 0;

function getSupply() {
  water = input("Write how many ml of water the coffee machine has:");
  milk = input("Write how many ml of milk the coffee machine has:");
  beans = input("Write how many grams of coffee beans the coffee machine has:");
  cups = input("Write how many cups of coffee you will need:");
}

function calculate(waterAvailable, milkAvailable, beansAvailable) {
  const waterPerCup = 200;
  const milkPerCup = 50;
  const beansPerCup = 15;

  const cupsByWater = Math.floor(waterAvailable / waterPerCup);
  const cupsByMilk = Math.floor(milkAvailable / milkPerCup);
  const cupsByBeans = Math.floor(beansAvailable / beansPerCup);
  
  return Math.min(cupsByWater, cupsByMilk, cupsByBeans);
}

function makeCoffee(cups, maxCups) {
  let output = "";
  if (maxCups >= cups) {
    output += "Yes, I can make that amount of coffee";
    if (maxCups - 1 > 1) {
      output += ` (and even ${maxCups - 1} more than that)`;
    }
  } else {
    output += `No, I can make only ${maxCups} cups of coffee`;
  }
  console.log(output);
}

getSupply();
const maxCups = calculate(water, milk, beans);
makeCoffee(cups, maxCups);
