import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../ui/table/table.component';
import { TeacherService } from '../../../services/teacher/teacher.service';
import { Teacher } from '../../../api/teacher';
import { ClassesService } from '../../../services/classes/classes.service';
import { Classes } from '../../../api/classes';
@Component({
  selector: 'app-teachers',
  imports: [TableComponent],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.scss'
})
export class TeachersComponent implements OnInit{
  
  teachers: Teacher[] = [];
  techerLabel: string[] = ['Info', 'Teacher ID', 'Courses', 'Classes','Phone','Address', 'Actions'];
  constructor(private teacherService: TeacherService,private classesService: ClassesService){}

  ngOnInit(): void {
    this.teacherService.getAllTeachers().subscribe((res: Teacher[]) => {
      this.teachers = res;
      console.log(this.teachers);
    });
    console.log(this.teachers); 
  }
}
