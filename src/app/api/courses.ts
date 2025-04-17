import { Teacher } from "./teacher";

export interface Courses {
    id: number;
    name: String;
    course_code: String;
    department: String;
    teachers: Teacher[];
}