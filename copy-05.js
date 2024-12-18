const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output:process.stdout
});

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
  console.log(`\nThe coffee machine has:
${coffeeMachine.water} ml of water
${coffeeMachine.milk} ml of milk
${coffeeMachine.beans} g of coffee beans
${coffeeMachine.cups} disposable cups
$${coffeeMachine.money} of money
    `);
}

async function buyCoffee() {
  const question = (query) => new Promise((resolve) => rl.question(query, resolve));
  let coffeeType = await question("\nWhat do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:\n");
  
  if (coffeeType == 1) makeCoffee(coffeeMachine, espresso);
  else if (coffeeType == 2) makeCoffee(coffeeMachine, latte);
  else if (coffeeType == 3) makeCoffee(coffeeMachine, cappuccino);
  else if (coffeeType == "back") {console.log(); return;}

  console.log();
}

function makeCoffee(coffeeMachine, recipe) {
  const message = canMakeCoffee(coffeeMachine, recipe);
  if (message === "I have enough resources, making you a cofffee!") {
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
  return "I have enough resources, making you a cofffee!";
}

async function fillSupplies() {
  const question = (query) => new Promise((resolve) => rl.question(query, resolve));

  coffeeMachine.water += Number(await question("\nWrite how many ml of water you want to add:"));
  coffeeMachine.milk += Number(await question("Write how many ml of milk you want to add:"));
  coffeeMachine.beans += Number(await question("Write how many grams of coffee beans you want to add:"));
  coffeeMachine.cups += Number(await question("Write how many disposable cups you want to add:"));
  
  console.log();
}

function takeMoney() {
  console.log(`I gave you $${coffeeMachine.money}
    `);
  coffeeMachine.money = 0;
}

(async function main() {
  const question = (query) => new Promise((resolve) => rl.question(query, resolve));
  let query = "Write action (buy, fill, take, remaining, exit):\n";
  let action = await question(query);

  while (action != "exit") {
    if (action === "buy") await buyCoffee();
    else if (action === "fill") await fillSupplies();
    else if (action === "take") takeMoney();
    else if (action === "remaining") displayState();

    action = await question(query);
  };
  
  rl.close();
})();
