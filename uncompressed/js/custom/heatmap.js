var heatMapWrapper = d3.select('#basicHeatMap');

var heatMap_margin = {
    top: 40,
    right: 40,
    bottom: 40,
    left: 40
};

var heatMapWrapperWidth = parseInt(heatMapWrapper.style('width')),
	heatMapWrapperHeight = parseInt(heatMapWrapper.style('height')),
	height = heatMapWrapperHeight - heatMap_margin.top - heatMap_margin.bottom,
	width = heatMapWrapperWidth - heatMap_margin.left - heatMap_margin.right,
    heatMap_rMin = 1,
    heatMap_rMax = 10;

var heatMap_xColumn = 'longitude',
    heatMap_yColumn = 'latitude',
    heatMap_rColumn = 'population';

//---

var heatMapSvg = heatMapWrapper.append('svg')
    .attr('width',heatMapWrapperWidth)
    .attr('height',heatMapWrapperHeight)
    .append('g')
    	.attr('transform','translate(' + heatMap_margin.left + ', ' + heatMap_margin.top + ')')
        .attr('width',width)
        .attr('height',height);

var heatMap_xScale = d3.scale.linear().range([0, width]),
    heatMap_yScale = d3.scale.linear().range([height, 0]),
    heatMap_rScale = d3.scale.linear().range([heatMap_rMin, heatMap_rMax]);
    // colouheatMap_rScale = d3.scale.category10();

function renderHeatMap(data){
	heatMap_xScale.domain(d3.extent(data, function (d){ return d[heatMap_xColumn]; }));
	heatMap_yScale.domain(d3.extent(data, function (d){ return d[heatMap_yColumn]; }));
    heatMap_rScale.domain(d3.extent(data, function (d){ return d[heatMap_rColumn]; }));

	var heatMap_circles = heatMapSvg.selectAll('circle').data(data);
	heatMap_circles.enter().append('circle');

	heatMap_circles
		.attr('cx',function (d){ return heatMap_xScale(d[heatMap_xColumn]); })
		.attr('cy',function (d){ return heatMap_yScale(d[heatMap_yColumn]); })
        .attr('r',function (d){ return heatMap_rScale(d[heatMap_rColumn]); })
        .attr('fill','white')
        .attr('opacity',.4);

	heatMap_circles.exit().remove();
}

//---

function mapDataType(d){
    d.longitude = +d.longitude;
    d.population = +d.population;
    d.latitude = +d.latitude;
    // d.petal_width = +d.petal_width;
    return d;
}

d3.csv("/cities.csv", mapDataType, renderHeatMap);