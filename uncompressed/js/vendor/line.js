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
var DrawLine = function drawLine(options){

    console.log(options);

    /**
     * ---------------------------------
     * OPTIONS
     * 
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
        },
        colours = [
            '#ffb832',
            '#c61c6f',
            '#268bd2',
            '#85992c'
        ],
        sort = true;

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
    if ( options.colours !== undefined ) {
        var colours = options.colours;
    }
    if ( options.sort === false ) {
        var sort = false;
    }

    /**
     * ----------
     * SETTINGS
     *
     * Sizes
     * Scales
     * Axes
     * Line
     * Parse Date
     * ----------
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
    var x = d3.time.scale()
        .range([0,width]);

    var y = d3.scale.linear()
        .range([height, 0]);

    /**
     * Axes
     */
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient('bottom');

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient('left');

    var line = d3.svg.line()
        .scale(y)
        .orient('left')

    /**
     * Parse Date
     */
    var parseDate = d3.time.format("%d-%b-%y").parse;

    var svg = wrapper.append('svg')
        .attr('width', wrapperWidth)
        .attr('height', wrapperHeight)
        .append('g')
        .attr('transform','translate(' + margin.top + ',' + margin.left + ')')

    
}