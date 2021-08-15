/**
 * Graph trends of home value across the U.S
 * Last edited on 8/14/2021
 */

// Creates the traces for all plotly line graphs
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

// Create the line graph with the actual home value data
d3.csv("../data_analytics/home_value_files/State_zhvi_uc_sfrcondo_tier_0.33_0.67_sm_sa_month.csv").then(function(data) {
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
        title:'Average Home Values for all States and DC since 1996',
        hovermode: 'closest',
        height: 530,
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

// Create the line graph from the linear regression trained with data from 1996 - 2003
d3.csv("../data_analytics/home_value_files/9604_State_Home_Values_LINEARpredicted.csv").then(function(data) {
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
        title:'Predicted Average Home Value based on 1996-2004 data',
        hovermode: 'closest',
        height: 530,
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

// Create the line graph from the linear regression trained with data from 2010-2019
d3.csv("../data_analytics/home_value_files/1119_State_Home_Values_LINEARpredicted.csv").then(function(data) {
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
        title:'Predicted Average Home Value based on 2011-2019 data',
        hovermode: 'closest',
        height: 530,
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
    Plotly.newPlot('1119_linear', traces, layout)
})

// Create the table with all the final data points
d3.csv("../data_analytics/home_value_files/All_June_2021_Values.csv").then(function(data) {
    // Print the data
    //console.log(data);

    // Column titles
    var columns = ['State','Actual','11-19 Growth','96-04 Growth']

    // Initial table structure
    var table = d3.select('#table').append('table')
    table.classed('table table-bordered table-secondary table-striped table-sm', true)
    var thead = table.append('thead')
    var tbody = table.append('tbody')

    // Fill table headers
    thead.append('tr')
    .selectAll('th')
        .data(columns)
        .enter()
    .append('th')
        .text(function (d) { return d })

    // Fill the table data
    for (i = 0; i < data.length; i++) {
        var row = tbody.append('tr');

        for (key in data[i]) {
            if (key == 'State')
                row.append('td')
                    .text(data[i][key])
            else if (key == 'Actual')
                row.append('td')
                    .text(parseInt(data[i][key]).toLocaleString('en-US'));
            else if (key == '96-04 Growth' || key == '11-19 Growth')
                if (isNaN(parseFloat(data[i][key])))
                    row.append('td')
                        .text("");
                else
                    row.append('td')
                        .text(parseFloat(parseFloat(data[i][key]).toFixed(2)).toLocaleString('en-US'));
        }
    }
});