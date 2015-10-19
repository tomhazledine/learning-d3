var coloursPreset = d3.scale.category20c();

var colours = d3.scale.ordinal()
	.range([
		'#595ab7',
		'#a57706',
		'#d11c24',
		'#c61c6f',
		'#bd3613',
		'#2176c7',
		'#259286',
		'#738a05'
	]);

var palette = {
	'aqua': '#7fdbff',
	'blue': '#0074d9',
	'navy': '#001f3f',
	'teal': '#39cccc',
	'green': '#2ecc40',
	'olive': '#3d9970',
	'lime': '#01ff70',
	'yellow': '#ffdc00',
	'orange': '#ff851b',
	'red': '#ff4136',
	'fuchsia': '#f012be',
	'purple': '#b10dc9',
	'maroon': '#85144b',
	'white': '#fff',
	'silver': '#ddd',
	'grey': '#aaa',
	'black': '#111'
}

var paletteArray = objectIntoArray(palette);

// for (var colour in palette) {
//     paletteArray.push(palette[colour]);
// }
// console.log(coloursPreset.range());

function objectIntoArray(object){
	var newArray = [];
	for (var key in object) {
	    newArray.push(object[key]);
	}
	return newArray;
}