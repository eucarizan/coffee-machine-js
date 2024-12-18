# coffee machine

- [coffee machine](#coffee-machine)
  - [learning](#learning)
  - [about](#about)
  - [stages](#stages)
    - [1: making coffee](#1-making-coffee)
    - [2: ingredient calculator](#2-ingredient-calculator)
    - [3: coffee for all](#3-coffee-for-all)
    - [4: buy fill take](#4-buy-fill-take)
    - [5: keep tracking of the supplies](#5-keep-tracking-of-the-supplies)

## learning
this project allows you to get a taste of javascript. practice working with functions, challenge yourself with loops and conditions, and get more experience with js.

## about
what can be better than a cup of coffee during a break? two cups. press a couple of buttons on the machine, and, voilà, a burst of raw energy is in your hands. but first, we should teach the machine how to do it. in this project, you will work on a coffee machine simulator. this machine uses regular ingredients — coffee, milk, and plastic cups. should it run out of something, it will show you a notification. our device will serve espresso, cappuccino, and latte. and since nothing is for free, it will also charge coffee lovers for a cup.

## stages
### 1: making coffee
<details>
<summary>write a program that puts some basic information on the screen. let the machine describe what it takes to make a cup of coffee</summary>

#### 1.1 description
let's start with a program that makes you a coffee – virtual coffee, of course. in this project, you will implement functionality that simulates a real coffee machine. it can run out of ingredients, such as milk or coffee beans, it can offer you various types of coffee, and, finally, it will take money for the prepared drink.

#### 1.2 objectives
the first version of the program just makes you a coffee. it should print to the standard output what it is doing as it makes the drink.

#### 1.3 examples
take a look at the sample output below and print all the following lines.

output:
```
starting to make a coffee
grinding coffee beans
boiling water
mixing boiled water with crushed coffee beans
pouring coffee into the cup
pouring some milk into the cup
coffee is ready!
```

</details>

### 2: ingredient calculator
<details>
<summary>the machine should calculate how many ingredients it needs to make the required amount of coffee.</summary>

#### 2.1 description
now let's consider a case when you need a lot of coffee. maybe you're hosting a party with a lot of guests! in these circumstances, it's better to make preparations in advance.

so, we will ask a user to enter the desired amount of coffee, in cups. given this, you can adjust the program by calculating how much water, coffee, and milk are necessary to make the specified amount of coffee.

of course, all this coffee is not needed right now, so at this stage, the coffee machine doesn't actually make any coffee yet.

#### 2.2 objectives
let's break the task into several steps:

1. first, read the numbers of coffee drinks from the input.
2. figure out how much of each ingredient the machine will need. note that one cup of coffee made on this coffee machine contains 200 ml of water, 50 ml of milk, and 15 g of coffee beans.
3. output the required ingredient amounts back to the user.

#### 2.3 examples
the greater-than symbol followed by a space (`> `) represents the user input. note that it's not part of the input.

**example 1**: _a dialogue with a user might look like this_
```
write how many cups of coffee you will need:
> 25
for 25 cups of coffee you will need:
5000 ml of water
1250 ml of milk
375 g of coffee beans
```

**example 2**: _here is another dialogue_
```
write how many cups of coffee you will need:
> 125
for 125 cups of coffee you will need:
25000 ml of water
6250 ml of milk
1875 g of coffee beans
```

</details>

### 3: coffee for all
<details>
<summary>program the machine to calculate how many cups it can make based on the number of set ingredients</summary>

#### 3.1 description
a real coffee machine doesn't have an infinite supply of water, milk, or coffee beans. and if you input a really big number, it's almost certain that a real coffee machine wouldn't have the supplies needed to make all that coffee for you.

in this stage, you need to improve the previous program. now you will check amounts of water, milk, and coffee beans available in your coffee machine at the moment.

#### 3.2 objectives
write a program that does the following:

1. it requests the amounts of water, milk, and coffee beans available at the moment, and then asks for the number of cups a user needs.
2. if the coffee machine has enough supplies to make the specified amount of coffee, the program should print `"yes, i can make that amount of coffee"`.
3. if the coffee machine can make more than that, the program should output `"yes, i can make that amount of coffee (and even n more than that)"`, where *n* is the number of additional cups of coffee that the coffee machine can make.
4. if the amount of given resources is not enough to make the specified amount of coffee, the program should output `"no, i can make only n cups of coffee"`.

like in the previous stage, the coffee machine needs 200 ml of water, 50 ml of milk, and 15 g of coffee beans to make one cup of coffee.

#### 3.3 examples
The greater-than symbol followed by a space (`> `) represents the user input. Note that it's not part of the input.

**example 1:**
```
write how many ml of water the coffee machine has:
> 300
write how many ml of milk the coffee machine has:
> 65
write how many grams of coffee beans the coffee machine has:
> 100
write how many cups of coffee you will need:
> 1
yes, i can make that amount of coffee

```

**example 2:**
```
write how many ml of water the coffee machine has:
> 500
write how many ml of milk the coffee machine has:
> 250
write how many grams of coffee beans the coffee machine has:
> 200
write how many cups of coffee you will need:
> 10
no, i can make only 2 cups of coffee

```

**example 3:**
```
write how many ml of water the coffee machine has:
> 1550
write how many ml of milk the coffee machine has:
> 299
write how many grams of coffee beans the coffee machine has:
> 300
write how many cups of coffee you will need:
> 3
yes, i can make that amount of coffee (and even 2 more than that)

```

**example 4:**
```
write how many ml of water the coffee machine has:
> 0
write how many ml of milk the coffee machine has:
> 0
write how many grams of coffee beans the coffee machine has:
> 0
write how many cups of coffee you will need:
> 1
no, i can make only 0 cups of coffee

```

**example 5:**
```
write how many ml of water the coffee machine has:
> 0
write how many ml of milk the coffee machine has:
> 0
write how many grams of coffee beans the coffee machine has:
> 0
write how many cups of coffee you will need:
> 0
yes, i can make that amount of coffee 

```

**example 6:**
```
write how many ml of water the coffee machine has:
> 200
write how many ml of milk the coffee machine has:
> 50
write how many grams of coffee beans the coffee machine has:
> 15
write how many cups of coffee you will need:
> 0
yes, i can make that amount of coffee (and even 1 more than that)
```

</details>

### 4: buy fill take
<details>
<summary>teach your virtual coffee machine to perform three basic actions: collect the money, replenish the supplies, and serve the coffee</summary>

#### 4.1 description
let's simulate an actual coffee machine! what do we need for that? this coffee machine will have a limited supply of water, milk, coffee beans, and disposable cups. also, it will calculate how much money it gets for selling coffee.

there are several options for the coffee machine we want you to implement: first, it should sell coffee. it can make different types of coffee: espresso, latte, and cappuccino. of course, each variety requires a different amount of supplies, however, in any case, you will need only one disposable cup for a drink. second, the coffee machine must get replenished by a special worker. third, another special worker should be able to take out money from the coffee machine.

#### 4.2 objectives
write a program that offers to buy one cup of coffee or to fill the supplies or to take its money out. note that the program is supposed to do one of the mentioned actions at a time. it should also calculate the amounts of remaining ingredients and how much money is left. display the quantity of supplies before and after purchase.

1. first, your program reads one option from the standard input, which can be `"buy"`, `"fill"`, `"take"`. if a user wants to buy some coffee, the input is `"buy"`. if a special worker thinks that it is time to fill out all the supplies for the coffee machine, the input line will be `"fill"`. if another special worker decides that it is time to take out the money from the coffee machine, you'll get the input `"take"`.
2. if the user writes `"buy"` then they must choose one of three types of coffee that the coffee machine can make: espresso, latte, or cappuccino.
  - for one espresso, the coffee machine needs _250 ml_ of water and _16 g_ of coffee beans. it costs _$4_.
  - for a latte, the coffee machine needs _350 ml_ of water, _75 ml_ of milk, and _20 g_ of coffee beans. it costs _$7_.
  - and for a cappuccino, the coffee machine needs _200 ml_ of water, _100 ml_ of milk, and _12 g_ of coffee beans. it costs _$6_.
3. if the user writes `"fill"`, the program should ask them how much water, milk, coffee and how many disposable cups they want to add into the coffee machine.
4. if the user writes `"take"` the program should give all the money that it earned from selling coffee.

at the moment, the coffee machine has _$550_, _400 ml_ of water, _540 ml_ of milk, _120 g_ of coffee beans, and *9* disposable cups.

to sum up, your program should print the coffee machine's state, process one query from the user, as well as print the coffee machine's state after that. try to use functions for implementing every action that the coffee machine can do.

#### 4.3 examples
an espresso should be number *1* in the list, a latte number *2*, and a cappuccino number *3*.
options are named as `"buy"`, `"fill"`, `"take"`.

the greater-than symbol followed by a space (`> `) represents the user input. note that it's not part of the input.

**example 1:**
```
the coffee machine has:
400 ml of water
540 ml of milk
120 g of coffee beans
9 disposable cups
$550 of money

write action (buy, fill, take): 
> buy
what do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino: 
> 3

the coffee machine has:
200 ml of water
440 ml of milk
108 g of coffee beans
8 disposable cups
$556 of money

```

**example 2:**
```
the coffee machine has:
400 ml of water
540 ml of milk
120 g of coffee beans
9 disposable cups
$550 of money

write action (buy, fill, take): 
> fill
write how many ml of water you want to add: 
> 2000
write how many ml of milk you want to add: 
> 500
write how many grams of coffee beans you want to add: 
> 100
write how many disposable cups you want to add: 
> 10

the coffee machine has:
2400 ml of water
1040 ml of milk
220 g of coffee beans
19 disposable cups
$550 of money

```

**example 3:**
```
the coffee machine has:
400 ml of water
540 ml of milk
120 g of coffee beans
9 disposable cups
$550 of money

write action (buy, fill, take): 
> take
i gave you $550

the coffee machine has:
400 ml of water
540 ml of milk
120 g of coffee beans
9 disposable cups
$0 of money
```

</details>

### 5: keep tracking of the supplies
<details>
<summary>program the machine to display how many supplies it has on the screen. work on the main loop: now, the menu keeps updating until users choose to exit.</summary>

#### 5.1 description
just one action is not so interesting, is it? let's improve the program so it can do multiple actions, one after another. it should repeatedly ask a user what they want to do. if the user types `"buy"`, `"fill"` or `"take"`, then the program should do exactly the same thing it did in the previous step. however, if the user wants to switch off the coffee machine, they should type `"exit"`. the program should terminate on this command. also, when the user types `"remaining"`, the program should output all the resources that the coffee machine has. this means that you shouldn't show the remaining stock levels at the beginning/end of the program.

remember, that:
- for the espresso, the coffee machine needs 250 ml of water and 16 g of coffee beans. it costs $4.
- for the latte, the coffee machine needs 350 ml of water, 75 ml of milk, and 20 g of coffee beans. it costs $7.
- and for the cappuccino, the coffee machine needs 200 ml of water, 100 ml of milk, and 12 g of coffee. it costs $6.

#### 5.2 objectives
write a program that will work endlessly to make coffee for all interested people until the shutdown signal is given. introduce two new options: `"remaining"` and "exit"`.

do not forget that you can be out of resources for making coffee. if the coffee machine doesn't have enough resources to make coffee, the program should output a message that says it can't make a cup of coffee and state what is missing.

and the last improvement to the program at this step — if the user types `"buy"` to buy a cup of coffee and then changes his mind, they should be able to type `"back"` to return into the main cycle.

#### 5.3 examples
your coffee machine should have the same initial resources as in the example (_400 ml_ of water, _540 ml_ of milk, _120 g_ of coffee beans, _9_ disposable cups, _$550_ in cash).

The greater-than symbol followed by a space (`> `) represents the user input. Note that it's not part of the input.

```
write action (buy, fill, take, remaining, exit): 
> remaining

the coffee machine has:
400 ml of water
540 ml of milk
120 g of coffee beans
9 disposable cups
$550 of money

write action (buy, fill, take, remaining, exit): 
> buy

what do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu: 
> 2
i have enough resources, making you a coffee!

write action (buy, fill, take, remaining, exit): 
> remaining

the coffee machine has:
50 ml of water
465 ml of milk
100 g of coffee beans
8 disposable cups
$557 of money

write action (buy, fill, take, remaining, exit): 
> buy

what do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu: 
> 2
sorry, not enough water!

write action (buy, fill, take, remaining, exit): 
> fill

write how many ml of water you want to add: 
> 1000
write how many ml of milk you want to add: 
> 0
write how many grams of coffee beans you want to add: 
> 0
write how many disposable cups you want to add: 
> 0

write action (buy, fill, take, remaining, exit): 
> remaining

the coffee machine has:
1050 ml of water
465 ml of milk
100 g of coffee beans
8 disposable cups
$557 of money

write action (buy, fill, take, remaining, exit): 
> buy

what do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu: 
> 2
i have enough resources, making you a coffee!

write action (buy, fill, take, remaining, exit): 
> remaining

the coffee machine has:
700 ml of water
390 ml of milk
80 g of coffee beans
7 disposable cups
$564 of money

write action (buy, fill, take, remaining, exit): 
> take

i gave you $564

write action (buy, fill, take, remaining, exit): 
> remaining

the coffee machine has:
700 ml of water
390 ml of milk
80 g of coffee beans
7 disposable cups
$0 of money

write action (buy, fill, take, remaining, exit): 
> exit
```

</details>

[<<](https://github.com/eucarizan/front-end/blob/main/README.md)
<!--
:%s/\(Sample \(Input\|Output\) \d:\)\n\(.*\)/```\r\r**\1**\r```\3/gc

### 0: 
<details>
<summary></summary>

#### 0.1 description

#### 0.2 objectives

#### 0.3 examples

</details>
-->

