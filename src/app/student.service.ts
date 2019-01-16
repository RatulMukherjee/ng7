import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { HttpClient } from '@angular/common/http';
import { Constants } from './app.constants';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

constructor(private http: HttpClient, ) {}

constants = Constants;
students: Student[] = [{
    id: 1,
    name: 'Krunal',
    en_roll: 110470116021,
    college: 'VVP Engineering College',
    university: 'GTU'
},
{
    id: 2,
    name: 'Rushabh',
    en_roll: 110470116023,
    college: 'VVP Engineering College',
    university: 'GTU'
},
{
    id: 3,
    name: 'Ankit',
    en_roll: 110470116022,
    college: 'VVP Engineering College',
    university: 'GTU'
}];





  public getStudents(): any {
    const studentsObservable = new Observable(observer => {
           setTimeout(() => {
               observer.next(this.students);
           }, 1000);
    });

    return studentsObservable;
  }

  getUsers(name) {
    return this.http.get(this.constants.links + '&t=' + name);
  }
}
