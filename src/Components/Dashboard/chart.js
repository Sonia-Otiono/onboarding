import React from 'react';
import {Line} from 'react-chartjs-2';

const state = {
  labels: [' ', 'JAN', 'FEB', 'MAR',
           'APR', 'MAY', 'JUN', 'JUL', 'AUG'],
  datasets: [
    {
      fill: true,
      lineTension: 0.5,
      backgroundColor: 'rgb(255, 0, 110, 0.35)',
      borderColor: 'rgba(255, 0, 110, 0.7)',
      borderWidth: 2,
      data: [ , 4, 7 , 10.5 , 11.5 , 12 , 8 , 5.5 ]
    }
  ],

}

export default class Chart extends React.Component {
  render() {
    return (
      <div>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              fontSize:20
            },
            legend:{
              display:false,
              position:'right'
            },
            scales: {
                yAxes: [{
                    gridLines: {
                        drawBorder: false,
                    },
                  ticks: {
                    padding: 15,
                    stepSize: 5,
                    min: 0,
                    max: 20
                  },
                }],
                xAxes : [ {
                    gridLines : {
                        display : false
                    }
                } ]
              }
          }}
        />
      </div>
    );
  }
}
