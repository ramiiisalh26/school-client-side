import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../ui/menu/menu.component';
import { NabvarComponent } from '../ui/nabvar/nabvar.component';
import { CalendarComponent } from '../ui/calendar/calendar.component';
import { AnnouncementComponent } from '../ui/announcement/announcement.component';
import { DetailsComponent } from '../details/details.component';
import { ScheduleComponent } from "../ui/schedule/schedule.component";
import { AuthService } from '../../../services/auth/auth.service';
import { Teacher } from '../../../api/teacher';
import { TeacherService } from '../../../services/teacher/teacher.service';
import { ScheduleService } from '../../../services/schedule/schedule.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacher',
  imports: [CalendarComponent, AnnouncementComponent, ScheduleComponent,CommonModule],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.scss'
})
export class TeacherComponent implements OnInit{
  menuItems = [
    {
      title: "MENU",
      items: [
        {
          icon: "/home.png",
          label: "Home",
          href: "/",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/teacher.png",
          label: "Teachers",
          href: "/dashboard/teacher/teachers",
          visible: ["admin", "teacher"],
        },
        {
          icon: "/student.png",
          label: "Students",
          href: "/list/students",
          visible: ["admin", "teacher"],
        },
        {
          icon: "/parent.png",
          label: "Parents",
          href: "/list/parents",
          visible: ["admin", "teacher"],
        },
        {
          icon: "/subject.png",
          label: "Courses",
          href: "/list/courses",
          visible: ["admin"],
        },
        {
          icon: "/class.png",
          label: "Classes",
          href: "/list/classes",
          visible: ["admin", "teacher"],
        },
        {
          icon: "/lesson.png",
          label: "Lessons",
          href: "/list/lessons",
          visible: ["admin", "teacher"],
        },
        {
          icon: "/exam.png",
          label: "Exams",
          href: "/list/exams",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/assignment.png",
          label: "Assignments",
          href: "/list/assignments",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/result.png",
          label: "Results",
          href: "/list/results",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/attendance.png",
          label: "Attendance",
          href: "/list/attendance",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/calendar.png",
          label: "Events",
          href: "/list/events",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/message.png",
          label: "Messages",
          href: "/list/messages",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/announcement.png",
          label: "Announcements",
          href: "/list/announcements",
          visible: ["admin", "teacher", "student", "parent"],
        },
      ],
    },
    {
      title: "OTHER",
      items: [
        {
          icon: "/profile.png",
          label: "Profile",
          href: "/profile",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/setting.png",
          label: "Settings",
          href: "/settings",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/logout.png",
          label: "Logout",
          href: "/logout",
          visible: ["admin", "teacher", "student", "parent"],
        },
      ],
    },
  ];

  teacher_code!: String | null;
  teacher_info: Teacher | undefined;
  username!: String | null;
  constructor(private authservices: AuthService, private teacherServices: TeacherService, private scheduleServices: ScheduleService){}
  
  ngOnInit(): void {
    this.username = this.authservices.getUsername();
    // this.teacherServices.getTeacherByUsername(this.username!).subscribe({
    //   next: (res) => {
    //     this.teacher_code = res.teacher_id;
    //   }
    // })
    
  }
}
