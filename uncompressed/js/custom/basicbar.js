var basicBarData = [];

for (var i = 0; i < 100; i++) {
    basicBarData.push(Math.round(Math.random()*100))
};

var coloursPreset = d3.scale.category20c();

var barOne = DrawBar({
    'data': basicBarData,
    'wrapper': d3.select('#basicBarChart'),
    'margins': {
        top: 30,
        right: 30,
        bottom: 40,
        left: 50
    },
    'colours': coloursPreset.range(),
    'sort': true
});