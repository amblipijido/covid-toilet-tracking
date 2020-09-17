import { Student } from './student';

export interface BathroomEvent {
    id?: string;
    student: Student;
    location: Location;
    inDate?: Date;
    outDate: Date;
    finished: boolean;
}
