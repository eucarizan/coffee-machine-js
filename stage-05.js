const input = require('sync-input');

let coffeeMachine = {
  water: 400,
  milk: 540,
  beans: 120,
  cups: 9,
  money: 550
};

const espresso = { water: 250, milk: 0, beans: 16, cups: 1, money: 4 };
const latte = { water: 350, milk: 75, beans: 20, cups: 1, money: 7 };
const cappuccino = { water: 200, milk: 100, beans: 12, cups: 1, money: 6 };

function displayState() {
  console.log(`\nThe coffee machine has:`);
  console.log(`${coffeeMachine.water} ml of water`);
  console.log(`${coffeeMachine.milk} ml of milk`);
  console.log(`${coffeeMachine.beans} g of coffee beans`);
  console.log(`${coffeeMachine.cups} disposable cups`);
  console.log(`$${coffeeMachine.money} of money`);
}

function buyCoffee() {
  let coffeeType = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:\n");
  
  if (coffeeType == 1) makeCoffee(coffeeMachine, espresso);
  else if (coffeeType == 2) makeCoffee(coffeeMachine, latte);
  else if (coffeeType == 3) makeCoffee(coffeeMachine, cappuccino);
  else if (coffeeType == "back") {console.log(); return;}

  console.log();
}

function makeCoffee(coffeeMachine, recipe) {
  const message = canMakeCoffee(coffeeMachine, recipe);
  if (message === "I have enough resources, making you a coffee!") {
    coffeeMachine.water -= recipe.water;
    coffeeMachine.milk -= recipe.milk;
    coffeeMachine.beans -= recipe.beans;
    coffeeMachine.cups -= recipe.cups;
    coffeeMachine.money += recipe.money;
  }
  console.log(message);
}

function canMakeCoffee(coffeeMachine, recipe) {
  if (coffeeMachine.water < recipe.water) return "Sorry, not enough water!";
  if (coffeeMachine.milk < recipe.milk) return "Sorry, not enough milk!";
  if (coffeeMachine.beans < recipe.beans) return "Sorry, not enough milk!";
  if (coffeeMachine.cups < recipe.cups) return "Sorry, not enough milk!";
  return "I have enough resources, making you a coffee!";
}

function fillSupplies() {
  coffeeMachine.water += Number(input("\nWrite how many ml of water the coffee machine has:"));
  coffeeMachine.milk += Number(input("Write how many ml of milk the coffee machine has:"));
  coffeeMachine.beans += Number(input("Write how many grams of coffee beans the coffee machine has:"));
  coffeeMachine.cups += Number(input("Write how many disposable cups you want to add:"));
  console.log();
}

function takeMoney() {
  console.log(`I gave you $${coffeeMachine.money}\n`);
  coffeeMachine.money = 0;
}

function mainLoop() {
  let query = "Write action (buy, fill, take, remaining, exit):\n";
  let action = input(query); 

  while (action != "exit") {
    if (action === "buy") buyCoffee();
    else if (action === "fill") fillSupplies();
    else if (action === "take") takeMoney();
    else if (action === "remaining") displayState();

    action = input(query); 
  };
}

mainLoop();
