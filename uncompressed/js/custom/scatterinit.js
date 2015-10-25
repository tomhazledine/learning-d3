var testScatter = DrawScatter({
    dataSrc      : '/iris.csv',
    wrapper      : d3.select('#basicScatterGraph'),
    margin       : { top: 20, right: 20, bottom: 20, left: 20 },
    xColumn      : 'sepal_length',
    yColumn      : 'petal_length',
    rColumn      : 'sepal_width',
    colourColumn : 'species',
    fixedRadius  : false,
    radii        : { rMin : 1, rMax : 20 },
    hasColours   : true,
    colours      : d3.scale.category10()
});