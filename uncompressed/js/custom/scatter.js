function type(d){
    d.sepal_length = +d.sepal_length;
    d.sepal_width = +d.sepal_width;
    d.petal_length = +d.petal_length;
    d.petal_width = +d.petal_width;
    return d;
}

d3.csv("/iris.csv", type, function(data){
    var min = d3.min(data, function (d){ return d.sepal_length; });
    var max = d3.max(data, function (d){ return d.sepal_length; });
    console.log([min,max]);
});