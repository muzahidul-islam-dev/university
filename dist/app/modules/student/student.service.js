import { StudentModel } from "./student.model.js";
const createStudentIntoDB = async (student) => {
    const result = await StudentModel.insertOne(student);
    return result;
};
const getAllStudentsFromDB = async () => {
    const result = await StudentModel.find();
    return result;
};
const getSingleStudentFromDB = async (id) => {
    const result = await StudentModel.findOne({ id });
    return result;
};
export const StudentService = {
    createStudentIntoDB,
    getAllStudentsFromDB,
    getSingleStudentFromDB
};
//# sourceMappingURL=student.service.js.map