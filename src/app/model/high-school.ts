import { Classroom } from './classroom';

export interface HighSchool{
    id?: string;
    name: string;
    classrooms?: Classroom[];
}
