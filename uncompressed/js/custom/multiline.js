var multiline = DrawLine({
    dataSrc      : '/patrick.csv',
    wrapper      : d3.select('#patrickGraph'),
    margin       : { top: 20, right: 20, bottom: 50, left: 50 },
    xColumn      : ['year'],
    yColumn      : ['range','range2']
});