# coffee machine

- [coffee machine](#coffee-machine)
  - [learning](#learning)
  - [about](#about)
  - [stages](#stages)
    - [1: making coffee](#1-making-coffee)
    - [2: ingredient calculator](#2-ingredient-calculator)
    - [3: coffee for all](#3-coffee-for-all)

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

