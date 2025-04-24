import { Component, Input, OnInit } from '@angular/core';
import {NgOptimizedImage} from "@angular/common"; 

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent{
  @Input() numbers!: String;
  @Input() type_of_card!: String;

  // ngOnInit(): void {
  //   // console.log(this.type_of_card)
  //   throw new Error('Method not implemented.');
  // }

}
