import type { TStudent } from "./student.interface.js";
export declare const StudentService: {
    createStudentIntoDB: (student: TStudent) => Promise<import("mongoose").Document<unknown, {}, TStudent, {}, {}> & TStudent & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    getAllStudentsFromDB: () => Promise<(import("mongoose").Document<unknown, {}, TStudent, {}, {}> & TStudent & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getSingleStudentFromDB: (id: string) => Promise<(import("mongoose").Document<unknown, {}, TStudent, {}, {}> & TStudent & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=student.service.d.ts.map