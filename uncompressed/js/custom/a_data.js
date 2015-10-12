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

// for (var i = 0; i < 50; i++) {
//     barData.push(Math.round(Math.random()*100))
// };

d3.tsv('/data.tsv',function(data) {
    for (key in data) {
        barData.push(data[key].value)
    }

    drawBarChart(barData);
    // console.log(barData);
});
