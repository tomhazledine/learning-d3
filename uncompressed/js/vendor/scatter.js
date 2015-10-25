/**
 * -----------------------------------------
 * DRAW SCATTER
 * Draw a scatter graph using given options.
 *
 * options [object]:
 * 
 * dataSrc [path string]
 * wrapper [d3 selection]
 * margin [top,right,bottom,left]
 * xColumn [string]
 * yColumn [string]
 * rColumn [string]
 * colourColumn [string]
 * fixedRadius [boolean]
 * radii [rMin,rMax]
 * hasColours [boolean]
 * colours [d3 color category scale]
 * -----------------------------------------
 */

var DrawScatter = function drawScatter(options){

    /**
     * ---------------------------------
     * OPTIONS
     * 
     * Use fallback values if options
     * are not set in the function call,
     * otherwise use defined options.
     * ---------------------------------
     */
    
    /* Fallbacks */
    var settings = {
        dataSrc      : '/iris.csv',
        wrapper      : d3.select('body'),
        margin       : { top: 20, right: 20, bottom: 20, left: 20 },
        xColumn      : 'xColumn',
        yColumn      : 'yColumn',
        rColumn      : 'rColumn',
        colourColumn : 'colourColumn',
        hasRadii     : false,
        fixedRadius  : 5,
        radii        : { rMin : 1, rMax : 20 },
        hasColours   : false,
        colours      : []
    };

    /* Set Options (if declared) */
    if (options !== undefined) {
        if ( options.dataSrc      !== undefined ) { settings.dataSrc      = options.dataSrc;      }
        if ( options.wrapper      !== undefined ) { settings.wrapper      = options.wrapper;      }
        if ( options.margin       !== undefined ) { settings.margin       = options.margin;       }
        if ( options.xColumn      !== undefined ) { settings.xColumn      = options.xColumn;      }
        if ( options.yColumn      !== undefined ) { settings.yColumn      = options.yColumn;      }
        if ( options.rColumn      !== undefined ) { settings.rColumn      = options.rColumn;      }
        if ( options.colourColumn !== undefined ) { settings.colourColumn = options.colourColumn; }
        if ( options.hasRadii     === true      ) { settings.hasRadii     = true;                 }
        if ( options.radii        !== undefined ) { settings.radii        = options.radii;        }
        if ( options.fixedRadius  !== undefined ) { settings.fixedRadius  = options.fixedRadius;  }
        if ( options.hasColours   === true      ) { settings.hasColours   = true;                 }
        if ( options.colours      !== undefined ) { settings.colours      = options.colours;      }
    }

    /**
     * --------------------
     * PARSE THE DATA
     *
     * Make sure columns
     * used return integers
     * and not strings.
     * --------------------
     */
    function _type(data){
        data[settings.xColumn] = +data[settings.xColumn];
        data[settings.yColumn] = +data[settings.yColumn];
        data[settings.rColumn] = +data[settings.rColumn];
        return data;
    }

    /**
     * ----------------------------
     * SIZES
     *
     * Find the w/h for the chart's
     * wrapper, and calculate the
     * inner w/h using the margins.
     * ----------------------------
     */
    var wrapperWidth = parseInt(settings.wrapper.style('width')),
        wrapperHeight = parseInt(settings.wrapper.style('height')),
        height = wrapperHeight - settings.margin.top - settings.margin.bottom,
        width = wrapperWidth - settings.margin.left - settings.margin.right;

    /**
     * ------------------------
     * SCALES
     *
     * Set the x & y scales.
     * If we want a variable
     * radius for our circles,
     * set the r scale.
     * If we want have colours,
     * set the colour scale.
     * ------------------------
     */
    var xScale = d3.scale.linear().range([0, width]),
        yScale = d3.scale.linear().range([height, 0]);
    if (settings.hasRadii) {
        var rScale = d3.scale.linear().range([settings.radii.rMin, settings.radii.rMax]);  
    }
    if (settings.hasColours) {
        var colourScale = d3.scale.category10();
    }

    /**
     * --------------------
     * DRAW SVG
     *
     * Build the containing
     * SVG for our chart.
     * Build and position
     * the inner group.
     * --------------------
     */
    var scatterSvg = settings.wrapper.append('svg')
        .attr('width',wrapperWidth)
        .attr('height',wrapperHeight)
        .append('g')
            .attr('transform','translate(' + settings.margin.left + ', ' + settings.margin.top + ')')
            .attr('width',width)
            .attr('height',height);

    /**
     * -------------------------
     * PUT IT ALL TOGETHER
     *
     * Using all our vars and
     * settings, build the chart
     * from the given dataset.
     * -------------------------
     */
    function _renderChart(data){
        xScale.domain(d3.extent(data, function (d){ return d[settings.xColumn]; }));
        yScale.domain(d3.extent(data, function (d){ return d[settings.yColumn]; }));
        if (settings.hasRadii) {
            rScale.domain(d3.extent(data, function (d){ return d[settings.rColumn]; }));
        }

        var circles = scatterSvg.selectAll('circle').data(data);
        circles.enter().append('circle');

        circles
            .attr('cx',function (d){ return xScale(d[settings.xColumn]); })
            .attr('cy',function (d){ return yScale(d[settings.yColumn]); })
            .attr('r',function (d){
                if (settings.hasRadii) {
                    return rScale(d[settings.rColumn]);
                } else {
                    return settings.fixedRadius;
                }
            })
            .attr('fill', function(d){
                if (settings.hasColours) {
                    return colourScale(d[settings.colourColumn]);
                } else {
                    return 'black';
                }
            })
            .attr('opacity',.4);

        circles.exit().remove();
        // console.log(data);
    }

    /**
     * INITIALISE THE CHART
     */
    d3.csv(settings.dataSrc, _type, _renderChart);
    // console.log(settings);
    


}