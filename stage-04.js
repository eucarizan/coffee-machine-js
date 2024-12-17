const input = require('sync-input');

let coffeeMachine = {
  water: 400,
  milk: 540,
  beans: 120,
  cups: 9,
  money: 500
};

const espresso = { water: 250, milk: 0, beans: 16, cups: 1, money: 4 };
const latte = { water: 350, milk: 75, beans: 20, cups: 1, money: 7 };
const cappuccino = { water: 200, milk: 100, beans: 12, cups: 1, money: 6 };

function displayState() {
  console.log(`The coffee machine has:
  ${coffeeMachine.water} ml of water
  ${coffeeMachine.milk} ml of milk
  ${coffeeMachine.beans} g of coffee beans
  ${coffeeMachine.cups} disposable cups
  $${coffeeMachine.money} of money`);
}

function buyCoffee() {
  let coffeeType = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:");
  
  if (coffeeType == 1) makeCoffee(coffeeMachine, espresso);
  else if (coffeeType == 2) makeCoffee(coffeeMachine, latte);
  else if (coffeeType == 3) makeCoffee(coffeeMachine, cappuccino);
}

function makeCoffee(coffeeMachine, recipe) {
  coffeeMachine.water -= recipe.water;
  coffeeMachine.milk -= recipe.milk;
  coffeeMachine.beans -= recipe.beans;
  coffeeMachine.cups -= recipe.cups;
  coffeeMachine.money += recipe.money;
}

function fillSupplies() {
  coffeeMachine.water += input("Write how many ml of water the coffee machine has:");
  coffeeMachine.milk += input("Write how many ml of milk the coffee machine has:");
  coffeeMachine.beans += input("Write how many grams of coffee beans the coffee machine has:");
  coffeeMachine.cups += input("Write how many disposable cups you want to add:");
}

function takeMoney() {
  console.log(`I gave you $${coffeeMachine.money}`);
  coffeeMachine.money = 0;
}

function mainLoop() {
  displayState();
  let action = input("Write action (buy, fill, take):"); 

  if (action === "buy") buyCoffee();
  else if (action === "fill") fillSupplies();
  else if (action === "take") takeMoney();
  
  displayState();
}

mainLoop();
