import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  private baseUrl = "http://localhost:8080/api/v1/exam";

  constructor() { }
}
