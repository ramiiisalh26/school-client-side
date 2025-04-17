import { Address } from "./address";
import { Student } from "./student";

export interface Parent {
    id: number;
    first_name: String ;
    middle_name: String ;
    last_name: String ;
    email: String ;
    phone: String ;
    address: Address;
    students: Student[];
}