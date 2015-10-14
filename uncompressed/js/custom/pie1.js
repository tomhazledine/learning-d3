function drawPieChart(data){
	
	var // Sizes
		width = 400,
		height = 400,
		radius = 200;

	var // Colours
		coloursPreset = d3.scale.category20c(),
		colours = d3.scale.ordinal()
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

	var pie = d3.layout.pie()
		.value(function(d){
			return d.value;
		})

	var arc = d3.svg.arc()
		.outerRadius(radius)
		.innerRadius(radius * .5)

	var myPieChart = d3.select('#chartFour').append('svg')
		.attr('width',width)
		.attr('height',height)
		.append('g')
			.attr('transform','translate(' + (width - radius) + ', ' + (height - radius) + ')')
			.selectAll('path').data(pie(data))
			.enter().append('g')
				.classed('slice', true)

	var slices = d3.selectAll('g.slice')
		.append('path')
		.attr('fill',function(d,i){
			return colours(i);
		})
		.attr('d', arc)

	var text = d3.selectAll('g.slice')
		.append('text')
		.text(function(d,i){
			// console.log(d);
			return d.data.label;
		})
		.attr('text-anchor','middle')
		.attr('fill', 'white')
		.attr('transform',function(d){
			d.innerRadius = 0;
			d.outerRadius = radius;
			return 'translate(' + arc.centroid(d) + ')';
		})
}