# [#JavaScript30](https://javascript30.com) #

## #3: Playing CSS Variables with JS ##

Let users interact with css attributes of an image by updating css variables. 

The image attribute values are set coming from css variables. To detect user's intetntion, by adding event listners for 'change' & 'mouseover' events. When an user drags any range bar or change the color from the color picker, program receives the value changing and updates the values to the css variables. 


## Keywords ##

JS

- Retreive `data-*` value (in tags): *`element`*`.dataset.<name>`
- Get / Set value of css variables (custom properties)
	- Getting & setting use diffent ways to access.
	- Get
		- `window.getComputedStyle(document.body).getPropertyValue( <propertyName> );` 
	- Set
		- `document.documentElement.style.setProperty( <propertyName>, <value> );` 

CSS

- CSS variables
	- Declared in `:root{ ... }`
	- Declaration: prefix with `--`, like `--<varName>: <value>;`
	- Using the variable: `var( --<varName> )`  
- Blur
	- `filter: blur( <length> );`


## Credit ##

Images

- Demo Image
	- File Path: `images/tw_green_island_cat.jpg`
	- Source: [flickr](https://www.flickr.com/photos/boklm/23810240173/in/photostream/)
	- Photographer: [Nicolas Vigier](https://www.flickr.com/photos/boklm/)
	- License: [Creative Commons CC0](https://creativecommons.org/publicdomain/zero/1.0/)

Fonts

- Riffic
	- File Path: `fonts/riffic_bold_macroman`
	- Source: [Fontspring](https://www.fontspring.com/fonts/inky-type/riffic)
	- Author: InkyType
	- License:
- Museo Slab
	- File Path: `fonts/museoslab_500_macroman`
	- Source: [Fontspring](https://www.fontspring.com/fonts/exljbris/museo-slab)
	- Author: exljbris Font Foundry 
	- Licnese:

