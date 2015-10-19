var nodes = [
    {
        name: 'Parent',
        value: 10,
        colour: palette['olive'],
    },
    { 
        name: 'Child1',
        value: 50,
        colour: palette['green'],
        target: [0]
    },
    { 
        name: 'Child2',
        value: 60,
        colour: palette['teal'],
        target: [1]
    },
    { 
        name: 'Child3',
        value: 45,
        colour: palette['teal'],
        target: [1]
    },
    { 
        name: 'Child4',
        value: 50,
        colour: palette['teal'],
        target: [1]
    },
    { 
        name: 'Child5',
        value: 40,
        colour: palette['teal'],
        target: [1]
    },
    { 
        name: 'Child7',
        value: 11,
        colour: palette['purple'],
        target: [5]
    },
    { 
        name: 'Child8',
        value: 8,
        colour: palette['purple'],
        target: [5]
    },
    { 
        name: 'Child9',
        value: 14,
        colour: palette['purple'],
        target: [5]
    },
    { 
        name: 'Child10',
        value: 6,
        colour: palette['purple'],
        target: [5]
    }
];

function drawForceChart(data,colours){

	var w = 600,
		h = 600;

	var circleWidth = 5;

    var links = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i].target !== undefined) {
            for (var x = 0; x < data[i].target.length; x++) {
                links.push({
                    source: data[i],
                    target: data[data[i].target[x]]
                })
            }
        }
    }

    var myChart = d3.select('#chartFive')
        .append('svg')
        .attr('width',w)
        .attr('height',h)

    var force = d3.layout.force()
        .nodes(data)
        .links([])
        .gravity(.1)
        .charge(-1000)
        .size([w,h])

    var link = myChart.selectAll('line')
        .data(links).enter().append('line')
        .attr('stroke',colours.grey)

    var node = myChart.selectAll('circle')
        .data(nodes).enter()
        .append('g')
        .call(force.drag)

    node.append('circle')
        .attr('cx',function(d){ return d.x; })
        .attr('cy',function(d){ return d.y; })
        .attr('r',function(d){
            return d.value;
        })
        .attr('fill',function(d){
            return d.colour;
        })
        .attr('cursor','pointer')

    node.append('text')
        .text(function(d){ return d.name })
        .attr('font-family','Lato')
        .attr('cursor','pointer')
        .attr('fill',function(d){ return d.colour })
        .attr('text-anchor','end')
        .attr('font-size',function(d,i){
            if (i>0) {
                return '1em'
            } else {
                return '1.5em'
            }
        })
        .attr('x',function(d,i){
            if (i>0) {
                return 0 - ( d.value + 5)
            } else {
                return 0 - (d.value + 10)
            }
        })
        .attr('y',function(d,i){
            if (i>0) {
                return circleWidth + 1
            } else {
                return 7
            }
        })

    force.on('tick',function(e){
        node.attr('transform', function(d,i){
            return 'translate(' + d.x + ', ' + d.y + ')';
        })

        link
            .attr('x1',function(d){ return d.source.x })
            .attr('y1',function(d){ return d.source.y })
            .attr('x2',function(d){ return d.target.x })
            .attr('y2',function(d){ return d.target.y })
    })

    force.start();

}

drawForceChart(nodes,palette);