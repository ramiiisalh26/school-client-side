import { Component, EventEmitter, inject, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { TableComponent } from '../ui/table/table.component';
import { TeacherService } from '../../../services/teacher/teacher.service';
import { Teacher } from '../../../api/teacher';
import { ClassesService } from '../../../services/classes/classes.service';
import {CdkPortal, ComponentPortal, PortalModule} from "@angular/cdk/portal"
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { Classes } from '../../../api/classes';
import { FormModuleComponent } from '../ui/form-module/form-module.component';
@Component({
  selector: 'app-teachers',
  imports: [
    TableComponent
],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.scss'
})
export class TeachersComponent implements OnInit{
  // child
  teachers: Teacher[] = [];
  techerLabel: string[] = ['Info', 'Teacher ID', 'Courses', 'Classes','Phone','Address', 'Actions'];
  overlayRef: OverlayRef | null = null;
  constructor(
    private teacherService: TeacherService,
    private classesService: ClassesService
    ){}

  ngOnInit(): void {
    this.teacherService.getAllTeachers().subscribe((res: Teacher[]) => {
      this.teachers = res;
      console.log(this.teachers);
    });
  }
}
