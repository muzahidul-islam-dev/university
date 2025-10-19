import { StudentService } from "./student.service.js";
import { StudentModel } from "./student.model.js";
import Joi from "joi";
import studentValidation from "./student.validation.js";
const createStudent = async (req, res) => {
    const { student: studentData } = req?.body;
    const { error, value } = studentValidation.validate(studentData);
    const result = await StudentService.createStudentIntoDB(value);
    return res.status(200).json({
        success: true,
        message: 'Student Created Successfully',
        data: result
    });
};
const getAllStudents = async (req, res) => {
    try {
        const result = await StudentService.getAllStudentsFromDB();
        res.status(200).json({
            success: true,
            message: 'Student are retrieved Successfully',
            data: result
        });
    }
    catch (error) {
        console.log(error);
    }
};
const getSingleStudent = async (req, res) => {
    try {
        const { studentId } = req.params;
        const result = await StudentService.getSingleStudentFromDB(studentId);
        res.status(200).json({
            success: true,
            message: 'Student are retrieved Successfully',
            data: result
        });
    }
    catch (error) {
        console.log(error);
    }
};
export const StudentController = {
    createStudent,
    getAllStudents,
    getSingleStudent
};
//# sourceMappingURL=student.controller.js.map