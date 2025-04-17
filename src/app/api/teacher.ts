import { Address } from "./address";
import { Classes } from "./classes";
import { Courses } from "./courses";

export interface Teacher {
    id: number;
    teacher_id: String;
    first_name: String;
    middle_name: String;
    last_name: String;
    email: String;
    photo: String;
    phone: String;
    courses: Courses[];
    classes: Classes[];
    address: Address;
}