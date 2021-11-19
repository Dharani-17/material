import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl:
  './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
 public name="dharani";
 public myid="testId";
 public isDisabled=false;
  constructor() { }

  ngOnInit(): void {
  }

}
