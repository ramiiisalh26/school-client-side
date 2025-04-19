import { Courses } from "./courses";
import { Result } from "./result";
import { Student } from "./student";
import { Teacher } from "./teacher";

export interface Classes {
    id: number;
    name: String;
    capacity: number;
    grade: number;
    super_visor: String;
    startTime: Date;
    endTime: Date;
    day: String;
    semester: String;
    status: String;
    teachers: Teacher[];
    courses: Courses[];
    students: Student[];
    results: Result[];
}