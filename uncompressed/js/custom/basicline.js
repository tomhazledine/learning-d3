var testScatter = DrawLine({
    dataSrc  : '/week_temp.csv',
    wrapper  : d3.select('#basicLineGraph'),
    margin   : { top: 20, right: 20, bottom: 50, left: 50 },
    xColumn  : 'timestamp',
    yColumn  : 'temperature',
    hasTimeX : true
});

// var basicLineWrapper = d3.select('#basicLineGraph');

// var basicLine_margin = {
//     top: 40,
//     right: 40,
//     bottom: 40,
//     left: 40
// };

// var basicLineWrapperWidth = parseInt(basicLineWrapper.style('width')),
//     basicLineWrapperHeight = parseInt(basicLineWrapper.style('height')),
//     height = basicLineWrapperHeight - basicLine_margin.top - basicLine_margin.bottom,
//     width = basicLineWrapperWidth - basicLine_margin.left - basicLine_margin.right,
//     basicLine_rMin = 1,
//     basicLine_rMax = 10;

// var basicLine_xColumn = 'timestamp',
//     basicLine_yColumn = 'temperature';

// //---

// var basicLineSvg = basicLineWrapper.append('svg')
//     .attr('width',basicLineWrapperWidth)
//     .attr('height',basicLineWrapperHeight);
// var group = basicLineSvg.append('g')
//         .attr('transform','translate(' + basicLine_margin.left + ', ' + basicLine_margin.top + ')')
//         .attr('width',width)
//         .attr('height',height);
// var path = group.append('path');

// var basicLine_xScale = d3.scale.linear().range([0, width]),
//     basicLine_yScale = d3.scale.linear().range([height, 0]);

// var line = d3.svg.line()
//     .x(function(d){ return basicLine_xScale(d[basicLine_xColumn]); })
//     .y(function(d){ return basicLine_yScale(d[basicLine_yColumn]); });

// function renderBasicLine(data){
//     basicLine_xScale.domain(d3.extent(data, function (d){ return d[basicLine_xColumn]; }));
//     basicLine_yScale.domain(d3.extent(data, function (d){ return d[basicLine_yColumn]; }));

//     path
//         .attr('d',line(data))
//         .attr('fill','none')
//         .attr('stroke','black')
//         .attr('stroke-width','1px');
// }

// //---

// function lineDataType(d){
//     d.timestamp = new Date(d.timestamp);
//     d.temperature = +d.temperature;
//     return d;
// }

// d3.csv("/week_temp.csv", lineDataType, renderBasicLine);