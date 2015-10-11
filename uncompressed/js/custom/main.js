console.log('scripts are still working');

var myStyles = [
    {
        colour: '#a57706',
        width: 4
    },
    {
        colour: '#bd3613',
        width: 4.2
    },
    {
        colour: '#d11c24',
        width: 4.8
    },
    {
        colour: '#c61c6f',
        width: 3.8
    },
    {
        colour: '#595ab7',
        width: 4.6
    },
    {
        colour: '#ab7595',
        width: 2
    },
    {
        colour: '#b75a59',
        width: 5
    },
    {
        colour: '#268bd2',
        width: 4.2
    }
];

var testItem = d3.selectAll('.item');

testItem
    .data(myStyles)
    .style({
        'color': 'white',
        'background' : function(d){
            return d.colour;
        },
        'width' : function(d){
            return d.width + 'em';
        }
    })