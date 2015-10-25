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
        fixedRadius  : true,
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
        if ( options.fixedRadius  === false     ) { settings.fixedRadius  = false;                }
        if ( options.radii        !== undefined ) { settings.radii        = options.radii;        }
        if ( options.hasColours   === true      ) { settings.hasColours   = true;                 }
        if ( options.colours      !== undefined ) { settings.colours      = options.colours;      }
    }

    console.log(settings);
}