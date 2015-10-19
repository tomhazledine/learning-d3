// /**
//  * ------------------------------------------------------------------------------------------
//  * DRAW BAR
//  * Draws a bar chart using given options.
//  *
//  * options.barData = [array of integers] The data to be drawn).
//  * options.wrapper = [d3.selection] Container element for the graph.
//  * options.margin = [array of 4 integers] The px-value of margins (top, right, bottom, left).
//  * ------------------------------------------------------------------------------------------
//  */
// var DrawLine = function drawLine(options){

//     console.log(options);

//     /**
//      * ---------------------------------
//      * OPTIONS
//      * 
//      * Use fallback values if options
//      * are not set in the function call,
//      * otherwise use defined options.
//      * ---------------------------------
//      */
    
//     /**
//      * Fallbacks
//      */
//     var
//         data = [1,2,3],
//         wrapper = d3.select('body'),
//         margin = {
//             top: 20,
//             right: 20,
//             bottom: 20,
//             left: 20
//         },
//         colours = [
//             '#ffb832',
//             '#c61c6f',
//             '#268bd2',
//             '#85992c'
//         ],
//         sort = true;

//     /**
//      * Set Options (if declared)
//      */
//     if ( options.margins !== undefined ) {
//         var margin = options.margins;
//     }
//     if ( options.data !== undefined ) {
//         var data = options.data;
//     }
//     if ( options.wrapper !== undefined ) {
//         var wrapper = options.wrapper;
//     }
//     if ( options.colours !== undefined ) {
//         var colours = options.colours;
//     }
//     if ( options.sort === false ) {
//         var sort = false;
//     }

//     /**
//      * ----------
//      * SETTINGS
//      *
//      * Sizes
//      * Scales
//      * Axes
//      * Line
//      * Parse Date
//      * ----------
//      */

//     /**
//      * Sizes
//      */
//     var wrapperWidth = parseInt(wrapper.style('width')),
//         wrapperHeight = parseInt(wrapper.style('height')),
//         height = wrapperHeight - margin.top - margin.bottom,
//         width = wrapperWidth - margin.left - margin.right,
//         barWidth = 40,
//         barOffset = 10;

//     /**
//      * Scales
//      */
//     var x = d3.time.scale()
//         .range([0,width]);

//     var y = d3.scale.linear()
//         .range([height, 0]);

//     /**
//      * Axes
//      */
//     var xAxis = d3.svg.axis()
//         .scale(x)
//         .orient('bottom');

//     var yAxis = d3.svg.axis()
//         .scale(y)
//         .orient('left');

//     var line = d3.svg.line()
//         .x(function(d){return x(d.date);})
//         .y(function(d){return x(d.close);});

//     /**
//      * Parse Date
//      */
//     var parseDate = d3.time.format("%d-%b-%y").parse;

//     data.forEach(function(d){
//         d.date = parseDate(d.date);
//         d.close = +d.close;
//     });

//     /**
//      * Setup Wrapper SVG
//      */
//     var svg = wrapper.append('svg');

//     svg
//         .attr('width', wrapperWidth)
//         .attr('height', wrapperHeight)
//         // .append('g')
//             // .classed('chartBody',true)
//             // .attr('transform','translate(' + margin.top + ',' + margin.left + ')')

//     /**
//      * Domains
//      */
//     x.domain(d3.extent(data,function(d){ return d.date; }));
//     y.domain(d3.extent(data,function(d){ return d.close; }));

//     /**
//      * Draw Axes
//      */
//     svg.append('g')
//         .classed('x axis',true)
//         .attr('transform','translate(0,' + height + ')')
//         .call(xAxis);

//     svg.append('g')
//         .classed('y axis', true)
//         .call(yAxis)
//         .append('text')
//             .attr('transform', 'rotate(-90)')
//             .attr('y',6)
//             .attr('dy','.71em')
//             .style('text-anchor', 'end')
//             .text('Price ($)');

//     /**
//      * Draw Chart
//      */
//     svg.append('path')
//         .datum(data)
//         .classed('line', true)
//         .attr('d',line)



// }