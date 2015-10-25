var testScatter = DrawScatter({
    dataSrc      : '/iris.csv',
    wrapper      : d3.select('#basicScatterGraph'),
    margin       : { top: 20, right: 20, bottom: 50, left: 50 },
    xColumn      : 'sepal_length',
    yColumn      : 'petal_length',
    rColumn      : 'sepal_width',
    colourColumn : 'species',
    hasRadii     : true,
    radii        : { rMin : 1, rMax : 20 },
    hasColours   : true,
    colours      : d3.scale.category10()
});