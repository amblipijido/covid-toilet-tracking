import { Classroom } from './classroom';
import { HighSchool } from './high-school';

export interface Location {
    id?: string;
    classroom: Classroom;
    highSchool: HighSchool;
    position: string;
}
