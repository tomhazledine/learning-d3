// Make some data

var barData = [];

for (var i = 0; i < 100; i++) {
    barData.push(Math.round(Math.random()*100))
};

var barOne = DrawBar({
    'data': barData,
    'wrapper': d3.select('#barChart'),
    'margins': {
        top: 30,
        right: 30,
        bottom: 40,
        left: 50
    },
    'colours': colours.range(),
    'sort': true
});
