/**
 * ------------------------------------------------------------------------------------------
 * DRAW BAR
 * Draws a bar chart using given options.
 *
 * options.barData = [array of integers] The data to be drawn).
 * options.wrapper = [d3.selection] Container element for the graph.
 * options.margin = [array of 4 integers] The px-value of margins (top, right, bottom, left).
 * ------------------------------------------------------------------------------------------
 */
var DrawBar = function drawBar(options){

    /**
     * ---------------------------------
     * OPTIONS
     * Use fallback values if options
     * are not set in the function call,
     * otherwise use defined options.
     * ---------------------------------
     */
    
    /**
     * Fallbacks
     */
    var
        barData = [1,2,3],
        wrapper = d3.select('body'),
        margin = {
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
        };

    /**
     * Set Options (if declared)
     */
    if ( options.margins !== undefined ) {
        var margin = options.margins;
    }
    if ( options.data !== undefined ) {
        var barData = options.data;
    }
    if ( options.wrapper !== undefined ) {
        var wrapper = options.wrapper;
    }

    /**
     * --------
     * SETTINGS
     *
     * Sizes
     * Scales
     * --------
     */

    /**
     * Sizes
     */
    var wrapperWidth = parseInt(wrapper.style('width')),
        wrapperHeight = parseInt(wrapper.style('height')),
        height = wrapperHeight - margin.top - margin.bottom,
        width = wrapperWidth - margin.left - margin.right,
        barWidth = 40,
        barOffset = 10;

    /**
     * Scales
     */
    var yScale = d3.scale.linear()
        .domain([0,d3.max(barData)])
        .range([0, height]);

    var xScale = d3.scale.ordinal()
        .domain(d3.range(0, barData.length))
        .rangeBands([0,width], .5);

    var vGuideScale = d3.scale.linear()
        .domain([0,d3.max(barData)])
        .range([height,0]);

    var colours = d3.scale.linear()
        .domain([0,barData.length * .33, barData.length * .66,barData.length])
        .range(['#ffb832','#c61c6f','#268bd2','#85992c']);

    var tempColour;

    var tooltip = d3.select('body').append('div')
        .classed('tooltip',true)
        // .style('position','absolute')
        // .style('padding','0 1em')
        // .style('background','white')
        // .style('opacity',0)

    barData.sort(function compareNumbers(a,b){
        return a - b;
    })

    var myChart = wrapper.append('svg')
        .style('background','#e7e0cb')
        .attr('height',height + margin.top + margin.bottom)
        .attr('width',width + margin.left + margin.right)
        .append('g')
        .attr('transform','translate(' + margin.left + ', ' + margin.top + ')')
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
                return 0;
            })
            .attr('y',function(d){
                return height;
            })
            .attr('x',function(d,i){
                return xScale(i);
            })
        .on('mouseover',function(d){

            tooltip.style('opacity',.9)

            tooltip.html(d)
                .style('left', (d3.event.pageX - 40) + 'px')
                .style('top', (d3.event.pageY) + 'px')

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

    myChart.transition()
        .attr('height',function(d){
            return yScale(d);
        })
        .attr('y',function(d){
            return height - yScale(d);
        })
        .delay(function(d,i){
            return i * 10;
        })
        .duration(800)
        .ease('elastic')

    var vAxis = d3.svg.axis()
        .scale(vGuideScale)
        .orient('left')
        .ticks(10)

    var vGuide = wrapper.select('svg').append('g')
        vAxis(vGuide)
        vGuide.attr('transform','translate(' + margin.left + ', ' + margin.top + ')')
        vGuide.selectAll('path')
            .style({fill: 'none',stroke: "#000"})
        vGuide.selectAll('line')
            .style({stroke: "#000"})

    var hAxis = d3.svg.axis()
        .scale(xScale)
        .orient('bottom')
        .tickValues(xScale.domain().filter(function(d,i){
            return !(i % (barData.length/5));
        }))

    var hGuide = d3.select('#chartThree svg').append('g')
        hAxis(hGuide)
        hGuide.attr('transform','translate(' + margin.left + ', ' + (height + margin.top) + ')')
        hGuide.selectAll('path')
            .style({fill: 'none',stroke: "#000"})
        hGuide.selectAll('line')
            .style({stroke: "#000"})
}