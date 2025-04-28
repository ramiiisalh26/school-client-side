import { Address } from "./address";
import { Assignment } from "./assignment";
import { Classes } from "./classes";
import { Result } from "./result";

export interface Student {
    id: number;
    student_id: String;
    first_name: String ;
    middle_name: String ;
    last_name: String;
    email: String;
    photo: String;
    phone: String;
    grade: number;
    // classes: Classes[];
    // results: Result[];
    // assignments: Assignment[];
    address: Address;
}