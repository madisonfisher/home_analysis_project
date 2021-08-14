var myMap = L.map("map", {
  center: [39.8283, -98.5795],
  zoom: 5
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

d3.json("Data/latlong_cities.json").then((data5) => {
  for (let j = 0; j < 96; j++) {
    d3.json("Data/city_mean_pending_weekly_predicted_modified.json").then((data1) => {
      var pred_mean_days = [];
      for (var i = 0; i < 204; i++) {
        var day = data1.Total_Days[i];
        pred_mean_days.push(day);
      }


      var US_mean = [];
      for (var i = 0; i < 204; i++) {
        var mean = data1.City_Data[j][i];
        US_mean.push(mean);
      }

      var trace1 = {
        x: pred_mean_days,
        y: US_mean,
        type: "line",
        line: {
          dash: "dot",
          width: 4,
          color: 'rgb(0, 0, 139)'
        },
        name: "Predicted Mean",
        legendgroup: 'group1'
      };

      d3.json("Data/city_median_pending_weekly_predicted_modified.json").then((data2) => {
        var pred_median_days = [];
        for (var i = 0; i < 204; i++) {
          var day = data2.Total_Days[i];
          pred_median_days.push(day);
        }

        var US_median = [];
        for (var i = 0; i < 204; i++) {
          var median = data2.City_Data[j][i];
          US_median.push(median);
        }

        var trace2 = {
          x: pred_median_days,
          y: US_median,
          type: "line",
          line: {
            dash: "dot",
            width: 4,
            color: 'rgb(255, 195, 0)'
          },
          name: "Predicted Median",
          legendgroup: 'group2'
        };

          d3.json("Data/city_mean_pending_weekly_smooth_base_modified.json").then((data3) => {
          var mean_days = [];
          for (var i = 0; i < 182; i++) {
            var day = data3.Total_Days[i];
            mean_days.push(day);
          }

          var country_mean = [];
          for (var i = 0; i < 182; i++) {
            var mean = data3.City_Data[j][i];
            country_mean.push(mean);
          }

          var trace3 = {
            x: mean_days,
            y: country_mean,
            type: "line",
            line: {
              width: 4,
              color: 'rgb(0, 0, 139)'
            },
            name: "Mean",
            legendgroup: 'group1',
          };

          d3.json("Data/city_median_pending_weekly_smooth_base_modified.json").then((data4) => {
            var median_days = [];
            for (var i = 0; i < 182; i++) {
              var day = data4.Total_Days[i];
              median_days.push(day);
            }
  
            var country_median = [];
            for (var i = 0; i < 182; i++) {
              var median = data4.City_Data[j][i];
              country_median.push(median);
            }
  
            var trace4 = {
              x: median_days,
              y: country_median,
              type: "line",
              line: {
                width: 4,
                color: 'rgb(255, 195, 0)'
              },
              name: "Median",
              legendgroup: 'group2'
            };

          var data = [trace1, trace2, trace3, trace4];

          var layout = {
            title: `Housing Data for ${data5.RegionName[j]}`,
            yaxis: { title: "Mean Days" },
            xaxis: { title: "Days Since 2018" },
            height: 300,
            width: 600,
            legend: {
              "orientation": "h",
              x: 0.25,
              y: -0.5,
            },
            margin: {
              t: 60, 
              l: 40, 
              r: 20,
              b: 20 },
            hovermode: "closest"
          };

          var content = `<div id=graph${j}></div>`;
          L.marker(data5.LatLong[j]).bindPopup(content).on('popupopen', function (info) {
            Plotly.newPlot(`graph${j}`, data, layout);
          }).addTo(myMap);

        })
      })
    })
  })

  }



})
