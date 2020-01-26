import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js'
import motm_json from '../../../../../data/motm.json';
import colors from '../../chartColours.json';

@Component({
  selector: 'app-polar-chart',
  template: '<canvas id="polChart" width="700" height="300"></canvas>',
})
export class PolarChartComponent implements OnInit {

  constructor() { }

  title = 'ipl-facts';
  canvas: any;
  ctx: any;
  ngOnInit() {
    var motm = motm_json;
    var labels=[], data=[], bgColors=[];
    for(var i=0; i<motm.data.length; i++){
      labels.push(motm.data[i].player_name);
      data.push(motm.data[i].count);
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
        responsive: false,
        display:true,
        legend:{
          position: "right"
        }
      }
    });
  }

}
