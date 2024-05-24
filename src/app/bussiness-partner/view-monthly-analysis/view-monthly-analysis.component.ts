import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-monthly-analysis',
  templateUrl: './view-monthly-analysis.component.html',
  styleUrls: ['./view-monthly-analysis.component.css']
})
export class ViewMonthlyAnalysisComponent {

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }

  title = 'ng-chart';
  chart: any = [];

  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [
          {
            label: "My Revenue",
            data: [300,100,500,1000, 4000],
            borderWidth: 1,
            backgroundColor:'#30d5c7'
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}