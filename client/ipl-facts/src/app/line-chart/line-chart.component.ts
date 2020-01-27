import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js'
import json_data from '../../../../../data/season_wins.json';

@Component({
  selector: 'app-line-chart',
  template: '<canvas id="lineChart"></canvas>',
})
export class LineChartComponent implements OnInit {

  title = 'ipl-facts';
  canvas: any;
  ctx: any;
  ngOnInit() {
    var labels = [], data = [];
    for (var i = 0; i < json_data.data.length; i++) {
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
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines: false
          }],
        }
      },

    });

  }

}
