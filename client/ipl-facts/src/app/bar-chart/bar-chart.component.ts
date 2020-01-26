import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js'
import season_json from '../../../../../data/team_bounds.json';
import bgColor from '../../chartColours.json';

@Component({
  selector: 'app-bar-chart',
  template: '<canvas id="barChart" width="700" height="300"></canvas>',
})
export class BarChartComponent implements OnInit {
title = 'ipl-facts';
canvas: any;
ctx: any;
ngOnInit() {
  var json_data = season_json;
  var labels=[], data=[], bgColors=[];
  for(var i=0; i<json_data.data.length; i++){
    labels.push(json_data.data[i].team_name);
    data.push(json_data.data[i].count);
    bgColors.push(bgColor.backgroundColor[i]);
  }
  this.canvas = document.getElementById('barChart');
  this.ctx = this.canvas.getContext('2d');
  let myChart = new Chart(this.ctx, {
    type: 'horizontalBar',
    data: {
        labels: labels,
        datasets: [{
            label: '# of Boundaries',
            data: data,
            borderWidth: 1,
            backgroundColor: bgColors
        }]
    },
    options: {
      responsive: false,
      display:true
    }
  });

}
  

}
