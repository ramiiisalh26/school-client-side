import { Component, Input, OnInit } from '@angular/core';
import {Chart, registerables} from 'chart.js';
import { StudentService } from '../../../services/student/student.service';
// import { ChartService } from '../../../services/chart/chart.service';
import { Student_chart } from '../../../api/Student_chart';
import { AttendaceService } from '../../../services/attendace/attendace.service';
Chart.register(...registerables) 

@Component({
  selector: 'app-count-chart',
  imports: [],
  templateUrl: './count-chart.component.html',
  styleUrl: './count-chart.component.scss'
})
export class CountChartComponent implements OnInit{

  percentage_of_girl: String | undefined;
  percentage_of_boy: String | undefined;
  boysAndGirls_count: number[] = [];
  labels: any[] = ["Girls","Boys"];
  total_count: number | undefined
  color: String [] = ["#FAE27C","#C3EBFA"];

  myChart: Chart | undefined;

  constructor(private studentServices: StudentService,private attendanceServices: AttendaceService){}

  ngOnInit() {
    this.attendanceServices.getAttendancesByDate("2025-04-28").subscribe((item) => {
      // console.log(item);
    })
    this.loadChartData();
    this.RenderdoughnutChart(this.labels,this.boysAndGirls_count,this.color);
  }

  loadChartData(){
    this.studentServices.getBoysAndGirlsCount().subscribe((item: Student_chart )=>{
      this.boysAndGirls_count.push(item.boys_count);
      this.boysAndGirls_count.push(item.girls_count);
      this.total_count = item.total_count;
      this.percentage_of_boy = (item.boys_count/item.total_count * 100).toFixed(1);
      this.percentage_of_girl = (item.girls_count/item.total_count * 100).toFixed(1);  
    });
  }

  RenderdoughnutChart(labelData: any, valueData: any, colorData: any){
    this.RenderChart(labelData,valueData,colorData,'doughnutchart','doughnut');
  }

  RenderChart(labelData: any, valueData: any,colorData: any,chartid:string,chartType: any){
    this.myChart = new Chart(chartid, {
      type: chartType,
      data: {
        labels: labelData,
        datasets: [
          {
            // label: labelData,
            data: valueData,
            backgroundColor: colorData
          }
        ],
      },
      options: {
        responsive: true,
        animation: false,
        plugins: {
          legend: {
            position: 'top',
          },
        },
        backgroundColor: 'transparent',
      }
      });
  };

}
