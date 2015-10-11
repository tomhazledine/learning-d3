
var testItem = d3.selectAll('#chart');

testItem
    .selectAll('div')
    .data(myStyles)
    .enter().append('div')
    .classed('item', true)
    .text(function(d){
        return d.name;
    })
    .style({
        'color': 'white',
        'background' : function(d){
            return d.colour;
        },
        'width' : function(d){
            return d.width + 'em';
        }
    })