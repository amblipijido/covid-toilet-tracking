import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { BathroomEvent } from '../../model/bathroom-event';

@Injectable({
  providedIn: 'root'
})
export class BathroomEventService {

  public bathRoomEvents: firebase.firestore.CollectionReference;
  // user: firebase.User;

  constructor() {
    // this.user = firebase.auth().currentUser;
    this.bathRoomEvents = firebase
    .firestore()
    .collection(`/bathroomEvents/`);
  }

  async addBathroomEvent(event: BathroomEvent) {
    await this.bathRoomEvents.add(event);
  }

  getBathroomsEvents(): firebase.firestore.CollectionReference {
    return this.bathRoomEvents;
  }

  async closeBathroomEvent(event: BathroomEvent): Promise<BathroomEvent> {
    let updatedEvent: BathroomEvent = {
      inDate: new Date(),
      finished: true,
      student: event.student,
      location: event.location,
      outDate: event.outDate
    };
    this.bathRoomEvents.doc(event.id).update(updatedEvent);
    updatedEvent.id = event.id;
    return updatedEvent;
  }
}
