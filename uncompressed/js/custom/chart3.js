d3.select('#chartThree').append('svg')
    .attr('width',width)
    .attr('height',height + 'em')
    .style('background','#c9d7d6')
    .selectAll('rect').data(barData)
    .enter().append('rect')
        .style('fill','#c61c6f')
        .attr('width',barWidth + 'em')
        .attr('height',function(d){
            return d + '%';
        })
        .attr('x',function(d,i){
            var newOffset = i * (barWidth + barOffset);
            console.log(newOffset);
            return newOffset + 'em';
        })
        .attr('y',function(d){
            var verticalPos = 100 - d;
            return verticalPos + '%';
        })