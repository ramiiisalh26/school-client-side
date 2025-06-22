import { ChangeDetectorRef, Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { Teacher } from '../../../../api/teacher';
import { TeacherService } from '../../../../services/teacher/teacher.service';
import { Router } from '@angular/router';
import { CoursesService } from '../../../../services/courses/courses.service';
import { Courses } from '../../../../api/courses';
@Component({
  selector: 'app-form-module',
  imports: [CommonModule,PortalModule,ReactiveFormsModule],
  templateUrl: './form-module.component.html',
  styleUrl: './form-module.component.scss'
})
export class FormModuleComponent implements OnInit, OnChanges{

  @ViewChild(CdkPortal) portal: CdkPortal | undefined;
  @Output() closeModal = new EventEmitter<void>();
  @Input() teacher_id: String | null | undefined;
  @Input() type: String | null | undefined;
  
  previewUrl: string | ArrayBuffer | null = null;
  courses_list: Courses[] = [];
  selected_courses: Courses[] = [];

  genders = [
    {label: "select gender", value: ''},
    {label: "Male", value: 'male'},
    {label: "Female", value: 'female'},
  ]

  constructor(
    private teacherServices: TeacherService, 
    private router: Router,
    private coursesServices: CoursesService,
    private cdr: ChangeDetectorRef // Force Angular to detect changes after patchValue()
  ){}

  ngOnInit(): void {
    this.overlayRef.backdropClick().subscribe(() => {
      this.closeModal.emit();
    });
    this.coursesServices.getAllCourses().subscribe({
      next: (courses) => {
        this.courses_list = courses;
      }
    })
  }

  // ngOnChanges() runs every time the @Input() changes,
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['teacher_id'] && this.teacher_id) {
      this.teacherServices.getTeacherByCode(this.teacher_id).subscribe({
        next: (teacher) =>{
          console.log(teacher)
          this.myForm.patchValue({
            first_name: teacher.first_name ?? null,
            middle_name: teacher.middle_name ?? null,
            last_name: teacher.last_name ?? null,
            email: teacher.email ?? null,
            phone: teacher.phone ?? null,
            address: {
              country: teacher.address?.country ?? null,
              city: teacher.address?.city ?? null,
              street: teacher.address?.street ?? null,
              zip: teacher.address?.zip ?? null,
              state: teacher.address?.state ?? null,
            }
          });
          // this.myForm.markAllAsTouched(); // Optional, to trigger UI updates
          // this.myForm.markAllAsTouched(); // Ensures the UI updates even inside nested groups
          this.cdr.detectChanges();
        },
        error: (err) => {console.error(err)}
      })
    }
  }

  myForm = new FormGroup({
    first_name: new FormControl(''),
    middle_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    gender: new FormControl(''),
    birthday: new FormControl(''),
    bloodType: new FormControl(''),
    address: new FormGroup({
      country: new FormControl(''),
      city: new FormControl(''),
      street: new FormControl(''),
      zip: new FormControl(''),
      state: new FormControl(''),
    }),
    courses: new FormControl([])
  })


  overlay = inject(Overlay);
  overlayConfig = new OverlayConfig({
    hasBackdrop: true,
    positionStrategy: this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically(),
    scrollStrategy: this.overlay.scrollStrategies.block(),
    minWidth: 500,
  });
  overlayRef = this.overlay.create(this.overlayConfig);

  ngAfterViewInit(): void {
    this.overlayRef?.attach(this.portal);
  }

  ngOnDestroy(): void {
    this.overlayRef?.detach();
    this.overlayRef?.dispose();
  }

  onSubmit(): void{
    const addressFromValue = this.myForm.value.address;
    const teacher_data: Teacher = {
      first_name: this.myForm.value.first_name ?? null,
      middle_name: this.myForm.value.middle_name ?? null,
      last_name: this.myForm.value.last_name ?? null,
      email: this.myForm.value.email ?? null,
      phone: this.myForm.value.phone ?? null,
      gender: this.myForm.value.gender ?? null,
      photo: null,
      address: {
        country: addressFromValue?.country ?? null,
        city: addressFromValue?.city ?? null,
        street: addressFromValue?.street ?? null,
        zip: addressFromValue?.zip ?? null,
        state: addressFromValue?.state ?? null,
      },
      courses: this.selected_courses,
      classes: null
    }
    // if(this.type == "update"){
    //   this.teacherServices.updateTeacher(,teacher_data).subscribe({

    //   })
    // }
    this.teacherServices.addTeacher(teacher_data).subscribe(res => {
      this.router.navigate(['/list/teachers']);
    })
  }

  triggerFileInput(input: HTMLInputElement): void {
    input.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
