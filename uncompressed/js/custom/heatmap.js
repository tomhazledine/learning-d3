var wrapper = d3.select('#basicHeatMap');

var margin = {
    top: 40,
    right: 40,
    bottom: 40,
    left: 40
};

var wrapperWidth = parseInt(wrapper.style('width')),
	wrapperHeight = parseInt(wrapper.style('height')),
	height = wrapperHeight - margin.top - margin.bottom,
	width = wrapperWidth - margin.left - margin.right,
    rMin = 1,
    rMax = 20;

var xColumn = 'longitude',
    yColumn = 'latitude',
    rColumn = 'population';

//---

var heatMapSvg = wrapper.append('svg')
    .attr('width',wrapperWidth)
    .attr('height',wrapperHeight)
    .append('g')
    	.attr('transform','translate(' + margin.left + ', ' + margin.top + ')')
        .attr('width',width)
        .attr('height',height);

var xScale = d3.scale.linear().range([0, width]),
    yScale = d3.scale.linear().range([height, 0]),
    rScale = d3.scale.linear().range([rMin, rMax]);
    // colourScale = d3.scale.category10();

function renderHeatMap(data){
	xScale.domain(d3.extent(data, function (d){ return d[xColumn]; }));
	yScale.domain(d3.extent(data, function (d){ return d[yColumn]; }));
    rScale.domain(d3.extent(data, function (d){ return d[rColumn]; }));

	var circles = heatMapSvg.selectAll('circle').data(data);
	circles.enter().append('circle');

	circles
		.attr('cx',function (d){ return xScale(d[xColumn]); })
		.attr('cy',function (d){ return yScale(d[yColumn]); })
        .attr('r',function (d){ return rScale(d[rColumn]); })
		// .attr('fill', function(d){ return colourScale(d[colourColumn]); })
        .attr('opacity',.4);
        // .attr('stroke', function(d){ return colourScale(d[colourColumn]); })
        // .attr('stroke-width','2px');

	circles.exit().remove();
}

//---

function type(d){
    d.longitude = +d.longitude;
    d.population = +d.population;
    d.latitude = +d.latitude;
    // d.petal_width = +d.petal_width;
    return d;
}

d3.csv("/cities.csv", type, renderHeatMap);