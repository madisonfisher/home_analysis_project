d3.json("../home_inventory_analysis/predicted_inventory_files/city_mean_pending_weekly_predicted_modified.json").then((data1) => {
    var pred_mean_days = [];
    for (var i = 0; i < 204; i++) {
        var day = data1.Total_Days[i];
        pred_mean_days.push(day);
    }
    console.log(pred_mean_days);

    var US_mean = [];
    for (var i = 0; i < 204; i++) {
        var mean = data1.City_Data[0][i];
        US_mean.push(mean);
    }
    console.log(US_mean);

    var trace1 = {
        x: pred_mean_days,
        y: US_mean,
        type: "line",
        line: {
            dash: "dot",
            width: 4
        },
        name: "Predicted Mean"
    };

    d3.json("../home_inventory_analysis/predicted_inventory_files/city_median_pending_weekly_predicted_modified.json").then((data2) => {
        var pred_median_days = [];
        for (var i = 0; i < 204; i++) {
            var day = data2.Total_Days[i];
            pred_median_days.push(day);
        }
        console.log(pred_median_days);

        var US_median = [];
        for (var i = 0; i < 204; i++) {
            var mean = data2.City_Data[0][i];
            US_median.push(mean);
        }
        console.log(US_median);

        var trace2 = {
            x: pred_median_days,
            y: US_median,
            type: "line",
            line: {
                dash: "dot",
                width: 4
            },
            name: "Predicted Median"
        };
        var data = [trace1, trace2];


        var layout1 = {
            title: "Mean Days on the Market",
            yaxis: { title: "Mean Days" },
            xaxis: { title: "Days Since 2018" }
        };

        Plotly.newPlot('graph', data, layout1);

    })
})