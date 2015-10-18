var dateData = d3.csv('/datedata.csv',function(error,data) {
    if (error) throw error;

    for ( var i = 0; i < data.length; i++) {
        console.log('date = ' + data[i].date + ', value = ' + data[i].close);
    }
});

// console.log(dateData.length);