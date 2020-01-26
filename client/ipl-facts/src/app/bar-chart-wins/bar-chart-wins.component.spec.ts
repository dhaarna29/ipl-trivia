import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartWinsComponent } from './bar-chart-wins.component';

describe('BarChartWinsComponent', () => {
  let component: BarChartWinsComponent;
  let fixture: ComponentFixture<BarChartWinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarChartWinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartWinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
