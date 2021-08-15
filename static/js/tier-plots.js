
let data = [
    {
        x: dates,
        y: valuesLo,
        type:'scatter',
        name: 'actual',
        line: {
            width: 5
          }
    },
    {
        x: dates,
        y: predictionsLo,
        type: 'scatter',
        name: 'predicted',
        opacity: 0.66,
        line: {
            width: 5,
        }
        
    }
];

let layout = {
    title: 'bottom to 35th percentile',
    width: 800,
    height: 500,
    annotations: [
        {
          x: '2010-01-31',
          y: 70000,
          xref: 'x',
          yref: 'y',
          text: 'Train score/test score: 0.9985/0.9954',
          showarrow: false,
          ax: 0,
          ay: 0
        }
      ]
  };

Plotly.newPlot('plot1', data, layout);

data = [
    {
        x: dates,
        y: valuesMid,
        type:'scatter',
        name: 'actual',
        line: {
            width: 5
          }
    },
    {
        x: dates,
        y: predictionsMid,
        type: 'scatter',
        name: 'predicted',
        opacity: 0.66,
        line: {
            width: 5,
        }
        
    }
];

layout = {
    title: '35th to 65th percentile',
    width: 800,
    height: 500,
    annotations: [
        {
          x: '2010-01-31',
          y: 140000,
          xref: 'x',
          yref: 'y',
          text: 'Train score/test score: 0.9979/0.9933',
          showarrow: false,
          ax: 0,
          ay: 0
        }
      ]
  };

Plotly.newPlot('plot2', data, layout);

data = [
    {
        x: dates,
        y: valuesHi,
        type:'scatter',
        name: 'actual',
        line: {
            width: 5
          }
    },
    {
        x: dates,
        y: predictionsHi,
        type: 'scatter',
        name: 'predicted',
        opacity: 0.66,
        line: {
            width: 5,
        }
        
    }
];

layout = {
    title: '65th to top percentile',
    width: 800,
    height: 500,
    annotations: [
        {
          x: '2010-01-31',
          y: 250000,
          xref: 'x',
          yref: 'y',
          text: 'Train score/test score: 0.9980/0.9921',
          showarrow: false,
          ax: 0,
          ay: 0
        }
      ]
  };

Plotly.newPlot('plot3', data, layout);