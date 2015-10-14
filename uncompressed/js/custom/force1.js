var nodes = [
    { name: 'Parent'},
    { name: 'Child1'},
    { name: 'Child2', target: [0]},
    { name: 'Child3', target: [0]},
    { name: 'Child4', target: [1]},
    { name: 'Child5', target: [0,1,2,3]}
];

var links = [];

for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].target !== undefined) {
        for (var x = 0; x < nodes[i].target.length; x++) {
            links.push({
                source: nodes[i],
                target: nodes[i].target[x]
            })
        }
    }
}

function drawForceChart(data,colours){

	var w = 900,
		h = 400;

	var circleWidth = 5;

	var links = [
	];
}

drawPieChart(pieData,coloursPreset);