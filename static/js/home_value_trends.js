/**
 * Graph trends of home value across the U.S
 * Last edited on 8/14/2021
 */

 function createTrace (homeValueRecord, yearKeys) {
    var homeValues = [];
    for(key in yearKeys) {
        homeValues.push(homeValueRecord[yearKeys[key]]);
    }
    return {
        x: yearKeys,
        y: homeValues,
        type: 'scatter',
        name: homeValueRecord.RegionName,
    }
}

d3.csv("../static/data/State_zhvi_uc_sfrcondo_tier_0.33_0.67_sm_sa_month.csv").then(function(data) {
    // Print the Data
    //console.log(data);

    // Create list of only the year keys
    var yearKeys = [];
    for(var key in data[0]) {
        if (!isNaN(key[0])){
            yearKeys.push(key);
        }
    }

    // Create all traces for line graph
    var traces = [];
    for (i = 0; i < data.length; i++) {
        traces.push(createTrace(data[i], yearKeys));
    }
    
    // Plot all traces and format with plotly
    var layout = {
        title:'Home values for all States and DC since 1996',
        hovermode: 'closest',
        height: 525,
        xaxis: {
            title: {
                text: 'Year',
            },
        },
        yaxis: {
            title: {
                text: 'Average Home Value',
            }
        }
    };
    Plotly.newPlot('state-plot', traces, layout)
})

d3.csv("../static/data/9604_State_Home_Values_LINEARpredicted.csv").then(function(data) {
    // Print the Data
    //console.log(data);

    // Create list of only the year keys
    var yearKeys = [];
    for(var key in data[0]) {
        if (!isNaN(key[0])){
            yearKeys.push(key);
        }
    }

    // Create all traces for line graph
    var traces = [];
    for (i = 0; i < data.length; i++) {
        traces.push(createTrace(data[i], yearKeys));
    }
    
    // Plot all traces and format with plotly
    var layout = {
        title:'1996 - 2003 Test',
        hovermode: 'closest',
        height: 525,
        xaxis: {
            title: {
                text: 'Year',
            },
        },
        yaxis: {
            title: {
                text: 'Average Home Value',
            }
        }
    };
    Plotly.newPlot('9604_linear', traces, layout)
})

d3.csv("../static/data/1019_State_Home_Values_LINEARpredicted.csv").then(function(data) {
    // Print the Data
    //console.log(data);

    // Create list of only the year keys
    var yearKeys = [];
    for(var key in data[0]) {
        if (!isNaN(key[0])){
            yearKeys.push(key);
        }
    }

    // Create all traces for line graph
    var traces = [];
    for (i = 0; i < data.length; i++) {
        traces.push(createTrace(data[i], yearKeys));
    }
    
    // Plot all traces and format with plotly
    var layout = {
        title:'2010-2019 Test',
        hovermode: 'closest',
        height: 525,
        xaxis: {
            title: {
                text: 'Year',
            },
        },
        yaxis: {
            title: {
                text: 'Average Home Value',
            }
        }
    };
    Plotly.newPlot('1019_linear', traces, layout)
})

d3.csv("../static/data/All_June_2021_Values.csv").then(function(data) {
    console.log(data);

    var columns = ['Date','Actual','96-03 Growth','10-19 Growth']

    var table = d3.select('#table').append('table')
    table.classed('table table-bordered table-secondary table-striped table-sm', true)
    var thead = table.append('thead')
    var tbody = table.append('tbody')

    thead.append('tr')
    .selectAll('th')
        .data(columns)
        .enter()
    .append('th')
        .text(function (d) { return d })

    for (i = 0; i < data.length; i++) {
        var row = tbody.append('tr');

        for (key in data[i]) {
            if (key == 'Actual')
                row.append('td')
                    .text(parseInt(data[i][key]).toLocaleString('en-US'));
            else if (key == '96-03 Growth' || key == '10-19 Growth')
                if (isNaN(parseFloat(data[i][key])))
                    row.append('td')
                        .text("");
                else
                    row.append('td')
                        .text(parseFloat(parseFloat(data[i][key]).toFixed(2)).toLocaleString('en-US'));
            else
                row.append('td')
                    .text(data[i][key]);
        }
    }
});