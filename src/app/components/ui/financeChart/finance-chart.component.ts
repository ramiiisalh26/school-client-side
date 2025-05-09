import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-finance-chart',
  imports: [],
  templateUrl: './finance-chart.component.html',
  styleUrl: './finance-chart.component.scss'
})
export class FinanceChartComponent implements OnInit{

  
  
  ngOnInit(): void {
    
  }

}
