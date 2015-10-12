
var // Sizes
    height = 400,
    width = 600,
    barWidth = 40,
    barOffset = 10;

var yScale = d3.scale.linear()
    .domain([0,d3.max(barData)])
    .range([0, height]);

var xScale = d3.scale.ordinal()
    .domain(d3.range(0, barData.length))
    .rangeBands([0,width]);

var colours = d3.scale.linear()
    .domain([0,barData.length * .33, barData.length * .66,barData.length])
    .range(['#ffb832','#c61c6f','#268bd2','#85992c']);

var tempColour;

d3.select('#chartThree').append('svg')
    .attr('width',width)
    .attr('height',height)
    // .style('background','#c9d7d6')
    .selectAll('rect').data(barData)
    .enter().append('rect')
        .style('fill',function(d,i){
            return colours(i);
        })
        .attr('width',xScale.rangeBand())
        .attr('height',function(d){
            return yScale(d);
        })
        .attr('x',function(d,i){
            return xScale(i);
        })
        .attr('y',function(d){
            return height - yScale(d);
        })
    .on('mouseover',function(d){
        tempColour = this.style.fill;
        d3.select(this)
            .style('opacity',.5)
            .style('fill','yellow')
    })
    .on('mouseout',function(d){
        d3.select(this)
            .style('opacity',1)
            .style('fill',tempColour)
    })

