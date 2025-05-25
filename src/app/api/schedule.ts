export interface Schedule {
    id: number;
    coursesName: String;
    day: Date;
    startTime: string;
    endTime: string;
    studentGroupOrTeacherCode: String;
    idx_x: number;
    idx_y: number;
    duration: number;
    semester: number;
    department: String;
}