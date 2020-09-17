import { Component } from '@angular/core';
import { BathroomEvent } from '../model/bathroom-event';
import { Location } from '../model/location';
import { Student } from '../model/student';
import { BathroomEventService } from '../service/bathroom/bathroom-event.service';
import { StudentService } from '../service/student/student.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public bathRoomEvents: BathroomEvent[];

  constructor(private eventService: BathroomEventService, private studentService: StudentService) {}

  ionViewWillEnter() {
    this.eventService
    .getBathroomsEvents()
    .get()
    .then(eventListSnapshot => {
      this.bathRoomEvents = [];
      eventListSnapshot.forEach(snap => {
        let inDateMillis;
        const isFinished = snap.data().finished;
        if (isFinished) {
          inDateMillis = snap.data().inDate.toMillis();
        }
        const outDateMillis = snap.data().outDate.toMillis();
        this.bathRoomEvents.push({
          id: snap.id,
          student: snap.data().student,
          inDate: isFinished ? new Date(inDateMillis) : null,
          outDate: new Date(outDateMillis),
          location: snap.data().location,
          finished: isFinished
        });
        return false;
      });
    });
  }

  finishBathroomEvent(item: BathroomEvent) {
    console.log(item);
    let index;
    this.eventService.closeBathroomEvent(item).then(value => {
      index = this.bathRoomEvents.findIndex(event => event.id === value.id);
      this.bathRoomEvents[index] = value;
      });
  }

  deleteEvent(item: BathroomEvent) {

  }
}
