//1.Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93//
// 1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.//

// Decalare varible for ages, add the sample numers, then console log the ages. then minus ages -1 and console log it, to get 90//
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log("Ages:", ages);
let minusAge = ages[ages.length - 1] - ages[0];
console.log("minusAge", minusAge);

// 1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).//

//  Use push method with age varible and push new age value 100, then console new age value, then decalare new minusagepush and console log minusagepush//

ages.push(100);
console.log("Ages after pushing a new value", ages);
let minusAgePush = ages[ages.length - 1] - ages[0];
console.log("minusAge", minusAgePush);

// the minus age code showing 100 - 3 the first and last element substact and equal 97 which makes it dynamic

// 1c.  Using a loop to find average age//

// We want to find the average and we do that by  finding the sum all of the numbers divided by the number of those numbers//
// Declare sumOfAges set = o then create a basic 4 loop, take sumofAges var =+ ages[i], console log it then divide SumofAges/ages.length//
let sumOfAges = 0;

for (let i = 0; i < ages.length; i++) {
  //console.log("test")//
  sumOfAges += ages[i];
  console.log("index:", i, "sumOfAges", sumOfAges);
}

console.log("Total Sum", sumOfAges);
let average = sumOfAges / ages.length;
console.log("average", average);

// 2 Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.//
//2a. Use a loop to iterate through the array and calculate the average number of letters per name. //
// Declare new var with names, then declare totalChars set to 0, then create loop then set totalChar += name[i]length, then console and then divide charstotal/names.length//

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let totalChars = 0;
for (let i = 0; i < names.length; i++) {
  //console.log(i, "test");''
  totalChars += names[i].length;
  console.log("index,:", i, "names", names[i], "totalchars:", totalChars);
}
let AverageName = totalChars / names.length;
console.log("Average of Names", AverageName);

// 2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.//

let concatNames = "";
for (let i = 0; i < names.length; i++) {
  concatNames = concatNames.concat(names[i] + " ");
  console.log(i, "Names Concatenated", concatNames);
}

// 3. How do you access the last element of any array? //
// ages[ages.length - 1]); was used to access the last element so we use that to acress the last in the array//
console.log("last element of age array;", ages[ages.length - 1]);

// 4. How do you access the first element of any array //
// ages[0]); was used to access the first element so we use that to acress the first in the array//

console.log("First element of ages array;", ages[0]);

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and //
//add the length of each name to the nameLengths array.//

//Name new varible namelength, console.log it to test it then make a 4 loop for this array then make another console.log
//the 4 loop and the varible namelength//

let nameLengths = [];
for (let i = 0; i < names.length; i++) {
  //console.log(i, "test");//
  nameLengths.push(names[i].length);
  console.log("names length array", nameLengths);
}

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.//
//Name new varible charsTotal, make a 4loop ,  reference charTotal += name.length[i] then console.log charsTotal//

let charsTotal = 0;
for (let i = 0; i < nameLengths.length; i++) {
  //console.log(i, "test"); //
  charsTotal += nameLengths[i];
  console.log("charsTotal;", charsTotal);
}

// 7 Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself //
//n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').//

// Declare function concatwords wtih two arguments word and n and pass in hello and 3 wwith concat word. Then console.log  "Word par "and n
//and  declare let concat = word. repeat(n))and console log concat to get hello 3 times//
//

function concatWords(word, n) {
  console.log("Word Par", word, "n Par", n);
  let concat = word.repeat(n);
  console.log(concat);
}
concatWords("hello", 3);

// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name. //
//The full name should be the first and the last name separated by a space.//

// Create function full name with param first and full name and then use let full name = and concat first and full name then console log full name//

function fullName(firstName, lastName) {
  let fullName = firstName + "" + lastName;
  console.log(fullName);
}

fullName("Sam", "Smith");

// 9.Write a function that takes an array of numbers and returns true if the sum of all the numbers //
//in the array is greater than 100.//

//create array numbers 1 amd numbers 2/

let numbers1 = [100, 200, 300, 400];
let numbers2 = [1, 2, 3, 4];

// Create a function with the sum of the numbers array, have let total= o  and created a loop,//
// make a if else statment to make sure it returns true if the array is greater than 100//

function sumNumbersArray(array) {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    //console.log(i, "test");//
    total += array[i];
    console.log("Total;", total);
  }
  if (total > 100) {
    console.log(total, true);
    return true;
  } else {
    console.log(total.false);
    return false;
  }
}
// use this to pass in the array//
sumNumbersArray(numbers1);

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.//

function calculateNumbersAverage(array) {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    //console.log(i, "test");//
    total += array[i];
    console.log("calculate Function, total:", total);
  }
  let average = total / array.length;
  console.log("Average of numbers:", average);
  return average;
}
calculateNumbersAverage(numbers1);

//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first //
//array is greater than the average of the elements in the second array.//

// First create to functions number 3 and number 4. then declare a function with twoAverage with both array, then console log parameter and then arrays 1 and 2/
// then declare the 2 total= 0 then make a loop, then  do a second loop for the second array//
// then figure out the average for both arraays then console.log and average them.

let number3 = [100, 100, 100];
let number4 = [100, 100, 99];

function twoAverages(array1, array2) {
  console.log("Parameters", array1, array2);
  let total1 = 0;
  let total2 = 0;
  for (const number of array1) {
    total1 += number;
    console.log("Current number loop1:", number, "Total1;", total1);
  }

  for (const number of array2) {
    total2 += number;
    console.log("Current number loop2:", number, "Total2;", total2);
  }
  let average1 = total1 / array1.length;
  let average2 = total2 / array2.length;

  console.log("average", average1, average2);
}
twoAverages(number3, number4);

//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, //
//and returns true if it is hot outside and if moneyInPocket is greater than 10.50.//

// Declare Function will buy drink with two paramters in it then console.log the set let buy drink if greater than 10.5 them connsoloe and set reutrn if it meets the requirements

function willBuyDrink(isHotOutside, moneyInPocket) {
  console.log("Parameters", isHotOutside, moneyInPocket);
  let buyDrink = isHotOutside === true && moneyInPocket > 10.5;
  console.log("Buy a drink?", buyDrink);
  return buyDrink;
}
willBuyDrink(true, 11);
