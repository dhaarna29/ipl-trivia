import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js'
import json_data from '../../../../../data/motm.json';
import colors from '../../chartColours.json';

@Component({
  selector: 'app-polar-chart',
  template: '<canvas id="polChart"></canvas>',
})
export class PolarChartComponent implements OnInit {

  constructor() { }

  title = 'ipl-facts';
  canvas: any;
  ctx: any;
  ngOnInit() {
    var labels = [], data = [], bgColors = [];
    for (var i = 0; i < json_data.data.length; i++) {
      labels.push(json_data.data[i].player_name);
      data.push(json_data.data[i].count);
      bgColors.push(colors.backgroundColor[i]);
    }
    this.canvas = document.getElementById('polChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'polarArea',
      data: {
        labels: labels,
        datasets: [{
          label: '# of Votes',
          data: data,
          borderWidth: 1,
          backgroundColor: bgColors
        }]
      },
      options: {
        legend: {
          position: "right"
        },
      }
    });
  }

}
