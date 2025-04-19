import { Assignment } from "./assignment";
import { Classes } from "./classes";
import { Result } from "./result";
import { Student } from "./student";
import { Teacher } from "./teacher";

export interface Courses {
    id: number;
    name: String;
    course_code: String;
    department: String;
    teachers: Teacher[];
    students: Student[];
    results: Result[];
    assignments: Assignment[]
    classes: Classes[];
}