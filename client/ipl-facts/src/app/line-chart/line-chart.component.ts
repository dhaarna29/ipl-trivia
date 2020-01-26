import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js'
import season_json from '../../../../../data/season_wins.json';

@Component({
  selector: 'app-line-chart',
  template: '<canvas id="lineChart" width="600" height="300"></canvas>',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  title = 'ipl-facts';
  canvas: any;
  ctx: any;
  ngOnInit() {
    var json_data = season_json;
    var labels=[], data=[];
    for(var i=0; i<json_data.data.length; i++){
      labels.push(json_data.data[i].season);
      data.push(json_data.data[i].count);
    }
    this.canvas = document.getElementById('lineChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
          labels: labels,
          datasets: [{
              label: '# of Matches Won',
              data: data,
              fill: false,
              borderWidth: 2,
              borderColor: '#2f4b7c'
          }]
      },
      options: {
        responsive: false,
        display:true,
        legend:{
          display: false
        },
        scales:{
          xAxes:[{
            gridLines: false
          }],
        }
      },
      
    });

}

}
