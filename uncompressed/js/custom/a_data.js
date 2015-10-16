// console.log('scripts are still working');

var myStyles = [
    {
        colour: '#a57706',
        name: 'Nigel Lowry',
        width: 4
    },
    {
        colour: '#bd3613',
        name: 'Mr Darcy',
        width: 4.2
    },
    {
        colour: '#d11c24',
        name: 'Barrott Bellingham',
        width: 4.8
    },
    {
        colour: '#c61c6f',
        name: 'Richard Tweed',
        width: 3.8
    },
    {
        colour: '#595ab7',
        name: 'Lorenzo Garcia',
        width: 4.6
    },
    {
        colour: '#ab7595',
        name: 'Juliet Brewer',
        width: 2
    },
    {
        colour: '#b75a59',
        name: 'Stuart O\'Doyle',
        width: 5
    },
    {
        colour: '#268bd2',
        name: 'Daniel Reeves',
        width: 4.2
    }
];

var barData = [];

for (var i = 0; i < 50; i++) {
    barData.push(Math.round(Math.random()*100))
};

var pieData = [
    {
        label: "Barot",
        value: 50
    },
    {
        label: "Gerard",
        value: 50
    },
    {
        label: "Jonathan",
        value: 50
    },
    {
        label: "Lorenzo",
        value: 50
    },
    {
        label: "Hilary",
        value: 50
    },
    {
        label: "Jennifer",
        value: 50
    }
];

// var nodes = [
//     { name: 'Parent'},
//     { name: 'Child1'},
//     { name: 'Child2', target[0]},
//     { name: 'Child3', target[0]},
//     { name: 'Child4', target[1]},
//     { name: 'Child5', target[0,1,2,3]}
// ];

// d3.tsv('/data.tsv',function(data) {
//     for (key in data) {
//         barData.push(data[key].value)
//     }

    var barArgs = {
        'data': barData,
        'wrapper': d3.select('#chartThree'),
        'margins': {
            top: 30,
            right: 30,
            bottom: 40,
            left: 50
        }
    };

    var barOne = DrawBar(barArgs);
    // console.log(barData);
// });

drawPieChart(pieData,colours);


// drawForceChart(nodes,palette);
