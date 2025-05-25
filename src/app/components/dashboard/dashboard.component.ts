import { Component } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { ParentComponent } from './parent/parent.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  isAdmin = true;
  isTeacher = false;
  isStudent = false;
  isParent = false;

}
