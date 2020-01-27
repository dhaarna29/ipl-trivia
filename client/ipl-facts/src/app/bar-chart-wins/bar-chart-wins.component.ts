import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import json_data from '../../../../../data/team_wins.json';

@Component({
  selector: 'app-bar-chart-wins',
  template: '<canvas id="barChartWins"></canvas>',
})
export class BarChartWinsComponent implements OnInit {

  title = 'ipl-facts';
  canvas: any;
  ctx: any;
  ngOnInit() {
    var labels = [], data = [];
    for (var i = 0; i < json_data.data.length; i++) {
      labels.push(json_data.data[i].team_name);
      data.push(json_data.data[i].count);
    }
    this.canvas = document.getElementById('barChartWins');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: '# of Matches',
          data: data,
          borderWidth: 1,
          backgroundColor: "#c1e7ff"
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            color: "#fff"
          }]
        }
      }
    });

  }
}
