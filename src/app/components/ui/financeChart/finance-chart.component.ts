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

  myChart: Chart | undefined;

  months: string[] = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  income: number[] = [4000,3000,2000,2780,1890,2390,3490,3490,3490,3490,3490,3490];
  expense: number[] = [2400,1398,9800,3908,4800,3800,4300,4300,4300,4300,4300,4300];

  ngOnInit(): void {
    this.RenderLineChart(this.months,this.income,this.expense);
  }

  RenderLineChart(months: string[],income: number[],expense: number[]){
    this.myChart = new Chart('linechart',{
      type: 'line',
      data:{
        labels: months,
        
        datasets:[{
          label: "income",
          data: income,
          backgroundColor: [
            '#FAE27C'
          ],
          borderColor: [
            '#FAE27C'
          ],
        },{
          label: "expense",
          data: expense,
          backgroundColor: [
            '#C3EBFA'
          ],
          borderColor: [
            '#C3EBFA'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          x: {
            ticks: { autoSkip: true, maxRotation: 45 },
            grid: {
              display: false 
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              display: false 
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false, // allows the height to stretch with width
        // animation: true,
        // plugins: {
        //   legend: {
        //     position: 'top',
        //     maxWidth: 10000,
        //   },
        // },
        backgroundColor: 'white',
        
      }
    })
  }
}
