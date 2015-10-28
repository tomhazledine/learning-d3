var testScatter = DrawLine({
    dataSrc  : '/week_temp.csv',
    wrapper  : d3.select('#basicLineGraph'),
    margin   : { top: 20, right: 20, bottom: 50, left: 50 },
    xColumn  : ['timestamp'],
    yColumn  : ['temperature'],
    hasTimeX : true
});