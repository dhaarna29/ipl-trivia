import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js'
import json_data from '../../../../../data/team_scores.json';

@Component({
  selector: 'app-box-chart',
  template: '<canvas id="boxChart"></canvas>',
})
export class BoxChartComponent implements OnInit {
  title = 'ipl-facts';
  canvas: any;
  ctx: any;
  ngOnInit() {
    var labels = [], data = [], lineData = [];
    for (var i = 0; i < json_data.data.length; i++) {
      labels.push(json_data.data[i].team_name);
      data.push([json_data.data[i].min, json_data.data[i].max]);
      lineData.push(json_data.data[i].avg);
    }
    this.canvas = document.getElementById('boxChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: "Avg Score",
          data: lineData,
          type: "line",
          fill: false,
          borderColor: "#004c6d"
        },
        {
          label: 'Min/Max Scores',
          data: data,
          borderWidth: 1,
          backgroundColor: "#c1e7ff"
        }
        ]
      },
      options: {
        scales: {
          xAxes: [{
            display: false
          }]
        }
      }
    });

  }

}
