import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit{
  timerStart: number;
  constructor(){
    this.timerStart=Date.now();
  }
  ngAfterViewInit(){
    console.log(this.timerStart)
    console.log(Date.now()-this.timerStart);
  }
}