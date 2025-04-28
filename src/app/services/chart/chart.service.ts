// import { Injectable } from '@angular/core';
// import { StudentService } from '../student/student.service';
// import { Chart, registerables } from 'chart.js';
// import { BehaviorSubject} from 'rxjs';
// import { Student_chart } from '../../api/student_chart';
// Chart.register(...registerables) ;

// @Injectable({
//   providedIn: 'root'
// })
// export class ChartService {
  
//   // myChart: Chart | undefined;

//   private student_doughnut_chart = new BehaviorSubject<Student_chart>({
//     girls_count: 0,
//     boys_count: 0,
//     total_count: 0,
//     fill: ""
//   });
  
//   current_doughnut_chart = this.student_doughnut_chart.asObservable();

//   constructor(private studentServices: StudentService) { }

//   loadChartDataForDoughnut(): void{
//     this.studentServices.getBoysAndGirlsCount().subscribe(
//       (items) =>{
//         this.updateCurrent_doughnut_chart(items);
//       }
//     )
//   }
  
//   updateCurrent_doughnut_chart(student_chart: Student_chart){
//     this.student_doughnut_chart.next(student_chart);
//     // console.log(this.current_doughnut_chart);
//   }

  


//   // RenderBubbleChart(){
//   //   const myChar = new Chart('bubblechart',{
//   //     type: 'bubble',
//   //     data: {
//   //       datasets: [
//   //         {
//   //           label: '',
//   //           data:[
//   //             {
//   //               x:20,
//   //               y:40,
//   //               r:60
//   //             },
//   //             {
//   //               x:30,
//   //               y:60,
//   //               r:90
//   //             },
//   //             {
//   //               x:3,
//   //               y:1,
//   //               r:10
//   //             },
//   //           ],
//   //           backgroundColor: ['red','green','yellow']
//   //         }
//   //       ]
//   //     },
//   //     options: {}
//   //   })
//   // }

//   // RenderScatterChart(){
//   //   const myChar = new Chart('scatterchart',{
//   //     type: 'scatter',
//   //     data: {
//   //       datasets: [
//   //         {
//   //           label: 'Yearly sales',
//   //           data: [
//   //             {
//   //               x:20,
//   //               y:40,
//   //               r:60
//   //             },
//   //             {
//   //               x:30,
//   //               y:60,
//   //               r:90
//   //             },
//   //             {
//   //               x:3,
//   //               y:1,
//   //               r:10
//   //             },
//   //           ],
//   //           backgroundColor:['red','green','yellow']

//   //         }
//   //       ]
//   //     },
//   //     options: {
//   //     }
//   //   })
//   // }

  
    
// }
