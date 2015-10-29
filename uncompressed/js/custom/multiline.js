var multiline = DrawLine({
    dataSrc      : '/test_multi.csv',
    wrapper      : d3.select('#multipleLines'),
    margin       : { top: 20, right: 20, bottom: 50, left: 50 },
    xColumn      : ['year'],
    yColumn      : ['range','range2','range3','range4']
});