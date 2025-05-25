import { Component, OnInit } from '@angular/core';
import { Announcement } from '../../../../api/announcement';
import { AnnouncementsService } from '../../../../services/announcements/announcements.service';
import { CommonModule, NgFor } from '@angular/common';
@Component({
  selector: 'app-announcement',
  imports: [NgFor,CommonModule],
  templateUrl: './announcement.component.html',
  styleUrl: './announcement.component.scss'
})
export class AnnouncementComponent implements OnInit{

  announcements: Announcement[] = [];
  
  constructor(private announcementService: AnnouncementsService){}

  ngOnInit(): void{
    this.announcementService.getAllAnnouncements().subscribe((data) => {
      this.announcements = data;
      console.log(this.announcements);
    });
  }
}
