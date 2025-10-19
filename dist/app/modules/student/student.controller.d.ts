import type { Request, Response } from "express";
export declare const StudentController: {
    createStudent: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getAllStudents: (req: Request, res: Response) => Promise<void>;
    getSingleStudent: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=student.controller.d.ts.map