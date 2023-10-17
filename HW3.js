"use strict";

// Task #1 - Напишіть функцію addThemAll

console.log(addThemAll(2,4)); // 6
console.log(addThemAll(1,2,3,4)); // 10
console.log(addThemAll(5,5,10)); // 20

function addThemAll (...args){
    let sum = 0;
    for (let arg of args){
        sum += arg;
    }
    return sum;
}

// Task #2 - Задача на використання замикання

console.log(multiply(5)(5))		// 25
console.log(multiply(2)(-2))	        // -4
console.log(multiply(4)(3))		// 12

function multiply(a) {
	return function (b){
        return a*b;
    }
}

// Task #3 - Напишіть функцію яка буде використовуватись для сортування масиву фільмів 

const movies = [
	{
		movieName: 'The Thing',
		releaseYear: 1982,
		directedBy: 'Carpenter',
		runningTimeInMinutes: 109,
	},
	{
		movieName: 'Aliens',
		releaseYear: 1986,
		directedBy: 'Cameron',
		runningTimeInMinutes: 137,
	},
	{
		movieName: 'Men in Black',
		releaseYear: 1997,
		directedBy: 'Sonnenfeld',
		runningTimeInMinutes: 98,
	},
	{
		movieName: 'Predator',
		releaseYear: 1987,
		directedBy: 'McTiernan',
		runningTimeInMinutes: 107,
	},
];

//console.log(movies.sort((firstItem, secondItem) => firstItem.releaseYear - secondItem.releaseYear))


console.log(movies.sort(byProperty('releaseYear', '>'))); 
// виведе масив фільмів посортованих по року випуску, від старішого до новішого
console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); 
// // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого
console.log(movies.sort(byProperty('movieName', '>'))); 
// // виведе масив фільмів посортованих по назві, в алфавітному порядку

function byProperty(property, direction) {
   if (direction === '>'){
    return (firstItem, secondItem) => (Reflect.get(firstItem, property) > Reflect.get(secondItem, property)) ? 1: -1;
   }
   else if (direction === '<'){
    return (firstItem, secondItem) => (Reflect.get(firstItem, property) < Reflect.get(secondItem, property)) ? 1:-1;
   }
 }

 // Task #4 - Напишіть функцію яка відфільтрує масив унікальних значень

 const userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];

function filterUnique(array) {
    return Array.from(new Set(array));
}

console.log(filterUnique(userNames)); // ['Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];