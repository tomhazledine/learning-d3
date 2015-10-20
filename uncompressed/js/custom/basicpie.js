var basicPieData = [
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

var coloursPreset = d3.scale.category20c();

var pieOne = DrawPie({
    'data': basicPieData,
    'wrapper': d3.select('#basicPieChart'),
    'margins': {
        top: 30,
        right: 30,
        bottom: 40,
        left: 50
    },
    'colours': coloursPreset,
    'sort': true
});