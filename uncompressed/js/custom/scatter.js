var wrapper = d3.select('#basicScatterGraph');

var margin = {
    top: 40,
    right: 40,
    bottom: 40,
    left: 40
};

var wrapperWidth = parseInt(wrapper.style('width')),
	wrapperHeight = parseInt(wrapper.style('height')),
	height = wrapperHeight - margin.top - margin.bottom,
	width = wrapperWidth - margin.left - margin.right

//---

var scatterSvg = wrapper.append('svg')
    .attr('width',wrapperWidth)
    .attr('height',wrapperHeight)
    .append('g')
    	.attr('transform','translate(' + margin.left + ', ' + margin.top + ')')
        .attr('width',width)
        .attr('height',height);

var xScale = d3.scale.linear().range([0, width]);
var yScale = d3.scale.linear().range([height, 0]);
var rScale = d3.scale.linear().range([0, 3]);

function renderScatter(data){
	xScale.domain(d3.extent(data, function (d){ return d.sepal_length; }));
	yScale.domain(d3.extent(data, function (d){ return d.petal_length; }));

	var circles = scatterSvg.selectAll('circle').data(data);
	circles.enter().append('circle').attr('r',function (d){ return rScale(d.sepal_width); });

	circles
		.attr('cx',function (d){ return xScale(d.sepal_length); })
		.attr('cy',function (d){ return yScale(d.petal_length); })
		.attr('fill','rgba(111,111,0,.5)');

	circles.exit().remove();
}

//---

function type(d){
    d.sepal_length = +d.sepal_length;
    d.sepal_width = +d.sepal_width;
    d.petal_length = +d.petal_length;
    d.petal_width = +d.petal_width;
    return d;
}

d3.csv("/iris.csv", type, renderScatter);