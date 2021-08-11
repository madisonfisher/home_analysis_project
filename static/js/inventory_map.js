// Creating our initial map object
// We set the longitude, latitude, and the starting zoom level
// This gets inserted into the div with an id of 'map'
var myMap = L.map("map", {
  center: [39.8283, -98.5795],
  zoom: 5
});

// Adding a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

d3.json("../home_inventory_analysis/latlong_cities.json").then((data3) => {
  for (let j = 0; j < 96; j++) {
    d3.json("../home_inventory_analysis/predicted_inventory_files/city_mean_pending_weekly_predicted_modified.json").then((data1) => {
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

        var US_median = [];
        for (var i = 0; i < 204; i++) {
          var mean = data2.City_Data[j][i];
          US_median.push(mean);
        }

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

        var layout = {
          title: `Housing Data for ${data3.RegionName[j]}`,
          yaxis: { title: "Mean Days" },
          xaxis: { title: "Days Since 2018" },
          height: 300,
          width: 600,
          legend: {
            "orientation": "h",
            x: 0,
            y: -1
          }
        };
        
        var content =`<div id=graph${j}></div>`;
        L.marker(data3.LatLong[j]).bindPopup(content).on('popupopen', function (info) {
          Plotly.newPlot(`graph${j}`, data, layout);
        }).addTo(myMap);

      })
    })



  }



})
