import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'ng7';
  InstaUser = '';
  books = '';

  students: Student[] = [];
  constructor (private studentService: StudentService ) {}

  ngOnInit() {
    // const studentsObservable = this.studentService.getStudents();
    // studentsObservable.subscribe((response: any) => {
    //     console.log(response);
    // });
  }
  show() {
    const allUsers = this.studentService.getUsers(this.InstaUser).subscribe((response: any ) => {
      console.log(response);
      this.books = response;
    });
  }

}
