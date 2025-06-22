import { Address } from "./address";
import { Classes } from "./classes";
import { Courses } from "./courses";

export interface Teacher {
    id?: number;
    teacher_id?: string | null;
    first_name: string | null;
    middle_name: string | null;
    last_name: string | null;
    email: string | null;
    photo: string | null;
    phone: string | null;
    gender: string | null;
    courses: Courses[] | null;
    classes: Classes[] | null;
    address: Address | null;
}
