#!/usr/bin/env node
// ASSSIGNMENT OF ARRAY.
// QUESTION:1.
// Create an array named fruits that contains the following string elements: "apple", "banana", "mango", "orange".
let fruits : string[] = ["Apple","Banana","Mango","Orange"]
console.log(fruits);

// QUESTION:2.
// Declare an array named numbers that can contain only number elements and initialize it with the values 10, 20, 30, and 40
let numbers :number[] = [10,20,30,40];
console.log(numbers);

// QUESTION:3.
//  Access the third element of the fruits array and assign it to a  variable named thirdFruit.
let thirdFruit = fruits[2];
console.log(thirdFruit);

 // QUESTION:4.
 // Change the second element of the numbers array to 25.
numbers.splice(1,1,25)
console.log(numbers);

 // QUESTION:5.
 // Add the element "grape" to the end of the fruits array using the method.
fruits.push("Grape");
console.log(fruits);

 // QUESTION:6.
// Remove the last element from the fruits array using the method and assign it to a variable named lastFruit.
let LastFruit = fruits.pop()
console.log(LastFruit);

 // QUESTION:7.
// Remove the first element from the fruits array using the method and assign it to a variable named firstFruit.
let firstFruit = fruits.shift()
console.log(firstFruit);

// QUESTION:8.
//  Add the element "kiwi" to the beginning of the fruits array using the method.
fruits.unshift("Kiwi")
console.log(fruits);

// QUESTION:9.
// Remove 2 elements from the fruits array starting from index 1 using the method.
fruits.splice(1,2)
console.log(fruits);

// QUESTION:10.
// Insert the elements "pineapple" and "pear" at index 2 of the fruits array using the method.
fruits.splice(2,0,"Pineapple","Pear")
console.log(fruits);

// QUESTION:11.
// Create a new array named citrusFruits that contains the first two elements of the fruits array using the method.
let citrusFruits = fruits.slice(0,2)
console.log(citrusFruits);

 // QUESTION:12.
// Create a new array named lastTwoFruits that contains the last  two elements of the fruits array using the method.
let lastTwoFruits = fruits.splice(2,2)
console.log(lastTwoFruits);