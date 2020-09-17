import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { Student } from 'src/app/model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  public students: firebase.firestore.CollectionReference;
  // user: firebase.User;

  constructor() {
    // this.user = firebase.auth().currentUser;
    this.students = firebase
    .firestore()
    .collection(`/students/`);
  }

  async addStudent(student: Student) {
    await this.students.add(student);
  }

  getStudents(): firebase.firestore.CollectionReference {
    return this.students;
  }

  getStudent(id: string): firebase.firestore.DocumentReference {
      return this.students.doc(id);
  }
}
