d3.csv('/datedata.csv',function(error,data) {
    if (error) throw error;

    var lineOne = DrawLine({
        'data': data,
        'wrapper': d3.select('#chartSix'),
        'margins': {
            top: 30,
            right: 30,
            bottom: 40,
            left: 50
        },
        'colours': colours.range(),
        'sort': true
    });
});