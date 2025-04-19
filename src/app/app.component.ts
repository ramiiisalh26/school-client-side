import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentService } from './services/student/student.service';
import { Student } from './api/student';
import { TeacherService } from './services/teacher/teacher.service';
import { Teacher } from './api/teacher';
import { ParentService } from './services/parent/parent.service';
import { Parent } from './api/parent';
import { ResultService } from './services/result/result.service';
import { Result } from './api/result';
import { Classes } from './api/classes';
import { ClassesService } from './services/classes/classes.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  students: Student[] = [];
  teachers: Teacher[] = [];
  parents: Parent[] = [];
  results: Result[] = [];
  classes: Classes[] = [];

  constructor(
    private studentServices: StudentService,
    private teacherServices: TeacherService,
    private parentServices: ParentService,
    private resultServices: ResultService,
    private classesServices: ClassesService
  ){}

  ngOnInit(): void {
    // this.studentServices.getAllStudents().subscribe({
    //   next: (response) => {
    //     this.students = response;
    //     console.log(this.students);
    //   },
    //   error: (err) => console.log(err)
    // })
    // this.teacherServices.getAllTeachers().subscribe({
    //   next: (response) =>{
    //     this.teachers = response;
    //     console.log(this.teachers);
    //   }
    // })
    // this.parentServices.getAllParents().subscribe({
    //   next: (res) =>{
    //     this.parents = res;
    //     console.log(this.parents);
    //   },
    //   error: (err) =>{
    //     console.log(err);
    //   }
    // });
    // this.resultServices.getAllResults().subscribe({
    //   next: (response) => {
    //     this.results = response;
    //     console.log(this.results);
    //   }
    // });
    this.classesServices.getAllClasees().subscribe({
      next: (respose) => {
        this.classes = respose;
        console.log(this.classes);
      }
    })
    throw new Error('Method not implemented.');
  };
  
  title = 'my-school-app';

}
