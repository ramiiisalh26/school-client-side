import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Teacher } from '../../../../api/teacher';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-table',
  imports: [CommonModule,RouterModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  columns = [
    {
      header: "Info",
      accessor: "info",
    },
    {
      header: "Teacher ID",
      accessor: "teacherId",
      className: "hidden md:table-cell",
    },
    {
      header: "Subjects",
      accessor: "subjects",
      className: "hidden md:table-cell",
    },
    {
      header: "Classes",
      accessor: "classes",
      className: "hidden md:table-cell",
    },
    {
      header: "Phone",
      accessor: "phone",
      className: "hidden lg:table-cell",
    },
    {
      header: "Address",
      accessor: "address",
      className: "hidden lg:table-cell",
    },
    {
      header: "Actions",
      accessor: "action",
    },
  ];
  @Input() teachers: Teacher[] = [];
  @Input() Label: string[] = [];
  
}
