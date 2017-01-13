# [#JavaScript30](https://javascript30.com) #

## #4: Array Cardio Day 1 ##

Manipulate data of arraies to meet the requirements. 8 requirements in total.

1. Filter the list of inventors for those who were born in the 1500's.
2. Give us an array of the inventors' first and last names.
3. Sort the inventors by birthdate, oldest to youngest.
4. How many years did all the inventors live?
5. Sort the inventors by years lived.
6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name. (Data source: [Wiki: Boulevards in Paris](https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris))
7. Sort the people alphabetically by last name. (Sort exercise)
8. Sum up the instances of each of these. (Reduce exercise)

## Keywords ##

JS

- Arrow function `=>`
	- if `input => input.value > 0`
	- means `function (input) { return input.value > 0; }`
- Method chaining
	- e.g. `data.map( ... ).sort( ... ).filter( ... )`
	- Reading: [Method Chaining in JavaScript](https://schier.co/blog/2013/11/14/method-chaining-in-javascript.html)
- Functions
	- `Console.table()`
		- Display tabular data as a table in the console.
	- `Array.prototype.filter()`
		- Filter a data set
		- Return new array.
	- `Array.prototype.map()`
		- Modify elements' value.
		- Return new array.
	- `Array.prototype.sort()`
		- Sorts the elements of an array by string Unicode or customize function. 
		- Modify the order of the array, and also return it. (order changed)
	- `Array.prototype.slice()`
		- Make a shallow copy from the original array. 
		- Can be used to clone an array. `arr.slice(0)` 
		- Return new sliced array.
	- `Array.prototype.reduce()`
		- Accumulate each value of the array.
		- Return the sum up value from the array. 