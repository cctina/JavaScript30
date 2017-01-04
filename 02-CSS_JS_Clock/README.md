# [#JavaScript30](https://javascript30.com) #

## #2: CSS + JS Clock ##
A clock made from CSS & JS. The clock hands are made by `<div>` blocks with 0 height & top border. Rotate the blocks through css `transform` atrribute to make the hands go around. 


## Keywords ##

JS

- `window.setInterval(function, delay-time)`
	- A function to be executed every delay milliseconds.

CSS

- `transform: rotate(10deg)`
- `transform-origin: 50%` (default 50%)
- `transition-timing-function: cubic-bezier(0.87, 1.65, 0.63, 0.77)`
	- Can test the function by using Chrome tool 
- Stop transition
	- Set `transition` value to `none`
		- `transition: none` (and add `!important`)
- Set an element in a absolute position in another element.
	- Parent element
		- `position: relative`
		- `top/left: ...`
	- Target element: 
		- `position: absolute`
		- `top/left: ...`
- `box-shadow: 0 0 5px rgba(0, 0, 0, 0.2)` &nbsp; 
	- [Box-shadow generator](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Box-shadow_generator)
	- The box-shadow property describes **one** or **more** shadow effects as a comma-separated list.
	- Syntax
		- offset-x | offset-y | [blur-radius | [spread-radius]] | color
			- `box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);`
		- inset | offset-x | offset-y | color
			- `box-shadow: inset 5em 1em gold;`
		- Any number of shadows, separated by commas
			- `box-shadow: 3px 3px red, -1em 0 0.4em olive;`
- `calc()`
	- Caclulate numbers in any css property. Please add units after each number.
	- ie. `width: calc(100% - 2px);`

## Credit ##

Images

- Background image
	- File Path: `images/StockSnap_night.jpg`
	- Source: [StockSnap.io](https://stocksnap.io/photo/NH2WNTX9RV)
	- Photographer: [Teddy Kelley](https://stocksnap.io/author/22413)
	- License: [Creative Commons CC0](https://stocksnap.io/license)


