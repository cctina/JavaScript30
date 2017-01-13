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
	- `Console.table( data )`
		- Display tabular data as a table in the console.
	- `Array.prototype.filter( callback )`
		- Filter a data set
		- Return new array.
	- `Array.prototype.map( callback )`
		- Modify elements' value.
		- Return new array.
	- `Array.prototype.sort( callback )`
		- Sorts the elements of an array by string Unicode or customize function. 
		- Modify the order of the array, and also return it. (order changed)
	- `Array.prototype.slice( callback )`
		- Make a shallow copy from the original array. 
		- Can be used to clone an array. `arr.slice(0)` 
		- Return new sliced array.
	- `Array.prototype.reduce( callback[, initialValue])`
		- Accumulate each value of the array.
		- Return the sum up value from the array. 
	- `String.prototype.includes( searchString[, position] )`
		- Determines whether one string may be found within another string.
		- 'position': where begin to search. (optional)
		- Return `true` or `false`.
	- `String.prototype.search( regexp )`
		- Execute a search for a match between a regular expression and this String object.
		- Return a Number: Index of the first match. If not found, return -1.
	- `String.prototype.match( regexp )`
		- Retrieves the matches when matching a string against a regular expression.
		- Return an *Array*: Containing all the matched substrings. If not found, return a array with a "" element. Detail information: 
			- array elements: `arr[0]`, whole match & partial matches.
			- index: `arr.index`, the zero-based index of the whole match.
			- input: `arr.input`, the original string that was parsed.
