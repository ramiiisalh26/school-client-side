import { Component, OnInit } from '@angular/core';
import { AttendaceService } from '../../../../services/attendace/attendace.service';
// import { AttendaceCount } from '../../../../api/attendance/attendanceCount';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-attendance-chart',
  imports: [],
  templateUrl: './attendance-chart.component.html',
  styleUrl: './attendance-chart.component.scss'
})
export class AttendanceChartComponent implements OnInit{
  
  statusCount: Map<string, number[]> = new Map();
  labels: string[] = ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];
  myChart: Chart | undefined;

  constructor(private attendanceServices: AttendaceService){}

  ngOnInit(): void {
    this.attendanceServices.getStatusCount().subscribe((items) => {
      this.statusCount = new Map(Object.entries(items));
      console.log(items);
    })
    this.RenderBarChart(this.labels);
    // throw new Error('Method not implemented.');
  }

  RenderBarChart(labelData: any){
    this.myChart = new Chart('barchart',{
      type: 'bar',
      data:{
        labels: labelData,
        datasets: [{
          label:"Present",
          data: [10,50,40,110,56,50,40],
          backgroundColor: [
            '#FAE27C'
          ],
          borderColor: [
            '#FAE27C'
          ],
          borderWidth: 1
      },
      {
        label:"Absent",
        data: [5,25,20,40,36,25,20],
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
      maintainAspectRatio: false,
      animation: false,
      plugins: {
        legend: {
          position: 'top',
        },
      },
      backgroundColor: 'white',
    }
    })
  }
}
