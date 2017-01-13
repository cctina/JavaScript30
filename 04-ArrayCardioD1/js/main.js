(function () {
	const model = {
	  // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1
    // Some data we can work with
		inventors: [
			{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
			{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
	    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
	    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
	    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
	    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
	    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
	    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
	    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
	    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
	    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
	    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
	  ],

	  people: [
	  	'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'
	  ],

    data: [
    	'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' 
    ]
	};

	const main = {
		init: function () {
			view.init();
		},

		printInventors: function () {
			model.inventors.forEach(function (inventor, index) {
				model.inventors[index].age = inventor.passed - inventor.year;
			});
			console.table(model.inventors);
		},

		// Array.prototype.filter()
		// 1. Filter the list of inventors for those who were born in the 1500's
		pplInFifteens: function () {
			// Callback function(element, index, array) { return boolean; }
			let results = model.inventors.filter(inventor => ( inventor.year >= 1500 && inventor.year < 1600 ));
			console.log("(1) People born in 1500's:");
			console.table(results);
			// return results;
		},
		  
    // Array.prototype.map()
    // 2. Give us an array of the inventors' first and last names
    pplMappedNames: function () {
    	let fullnames = model.inventors.map(inventor => `${inventor.first} ${inventor.last}`);
    	console.log("(2) All the inventors:");
    	console.log(fullnames);
    	// return fullnames;
    },

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    pplSortByAge: function () {
    	// clone the array by arr.slice(0)
    	// if < 0, a comes first. (older)
    	let results = model.inventors.slice(0).sort((a, b) => (a.year - b.year));
    	console.log("(3) Inventors sorted by age (Older to younger)");
    	console.table(results);
    },

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?
    agesInTotal: function () {
    	// function (accumulator, currentValue, cuerrentIndex, array) {}
    	let sum = model.inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);
    	console.log("(4) How many years did all the inventors live?");
    	console.log(sum);
    },

    // 5. Sort the inventors by years lived
    pplAgesSorted: function () {
    	// clone the array by arr.slice(0)
    	let results = model.inventors.slice(0).sort((a, b) => ( (b.passed - b.year) - (a.passed - a.year) ));
    	console.log("(5) Inventors' lived ages");
    	console.table(results);
    },

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    // Only tried this in the console of the web page.
    blvdsInParis: function () {
    	// Transfer a NodeList into an Array: 2 ways. 
    	// (1) Array.from( NodeList ) 
    	// (2) ES6: [... NodeList]
    	let links = Array.from( document.querySelectorAll('.mw-category a') );
    	let blvds = [];
    	//-- String.prototype.includes(string)
			blvds = links
				    		.map( link => link.textContent )
				    		.filter( item => item.includes('de') );
    	//-- String.prototype.search(reg)
    	// let re = /de+/i;
    	// blvds = links
				 //    		.map( link => link.textContent )
				 //    		.filter( item => item.search(re) !== -1);
			console.log("(6) Create a list of Boulevards in Paris that contain 'de':"); 
			console.log("Please try the codes in the console of the page https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris");
    },
    
    // 7. sort Exercise
    // Sort the people alphabetically by last name (model.people)
    sortByAlphabets: function () {
    	let results = model.people
    												.map( fullname => fullname.split(', ') )
    												.sort( (lastOne, nextOne) => lastOne[1] > nextOne[1] ? 1 : -1 );
    	console.log("(7) Sort the people alphabetically by last name:");
    	console.table(results);
    },

    // 8. Reduce Exercise
		// Sum up the instances of each of these (model.data)
		countingByName: function () {
			// let group = {};
			// model.data.forEach( item => !group[item] ? group[item] = 1 : group[item] += 1 );
			// function (accumulator, currentValue, cuerrentIndex, array) {}
			let result = model.data.reduce( (group, item) => {
				if (!group[item]) {
					group[item] = 0;
				}
				group[item] += 1;
				return group;
			}, {});
			console.log("(8) Sum up the instances of data:");
			console.log(result);
		}

	};
    
  const view = {
  	init: function () {
  		this.render();
  	},

  	render: function () {
  		// original array
  		main.printInventors();

  		// (1) Array.prototype.filter()
  		main.pplInFifteens();
  		// (2) Array.prototype.map()
  		main.pplMappedNames();
  		// (3) Array.prototype.sort()
  		main.pplSortByAge();
  		// (4) Array.prototype.reduce()
  		main.agesInTotal();
  		// (5) Sort the inventors by years lived
    	main.pplAgesSorted();
  		// (6) Create a list of Boulevards in Paris that contain 'de' anywhere in the name
  		main.blvdsInParis();
  		// (7) sort Exercise: Sort the people alphabetically by last name (model.people)
			main.sortByAlphabets();
    	// (8) Reduce Exercise: Sum up the instances of each of these (model.data)
			main.countingByName();
  	}
	};

	main.init();

})();