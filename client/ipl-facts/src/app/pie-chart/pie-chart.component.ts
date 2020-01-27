import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js'
import json_data from '../../../../../data/win_type.json';
import bgColor from '../../chartColours.json';

@Component({
  selector: 'app-pie-chart',
  template: '<canvas id="pieChart"></canvas>',
})
export class PieChartComponent implements OnInit {

  constructor() { }

  title = 'ipl-facts';
  canvas: any;
  ctx: any;
  ngOnInit() {
    var labels=[], data=[], colors=[];
    for(var i=0; i<json_data.data.length; i++){
      labels.push(json_data.data[i].win_type);
      data.push(json_data.data[i].count);
      colors.push(bgColor.backgroundColor[i]);
    }
    this.canvas = document.getElementById('pieChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'pie',
      data: {
          labels: labels,
          datasets: [{
              label: '# of Votes',
              data: data,
              borderWidth: 1,
              backgroundColor: colors
          }]
      },
      options: {
        legend:{
          position: "right"
        }
      }
    });

}
}
