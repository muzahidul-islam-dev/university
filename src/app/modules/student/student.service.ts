import type { TStudent } from "./student.interface.js";
import { StudentModel } from "./student.model.js";

const createStudentIntoDB = async (studentData: TStudent) => {


    if(await StudentModel.isUserExists(studentData.id)){
        throw new Error('User allready exists');
    }


    const result = await StudentModel.insertOne(studentData);


    // const student = new StudentModel(studentData);
    // if(await student.isUserExists(student.id)){
    //     throw new Error('User allready exists')
    // }
    // const result = await student.save();
    return result;
}

const getAllStudentsFromDB = async () => {
    const result = await StudentModel.find();
    return result;
}
const getSingleStudentFromDB = async (id:string) => {
    const result = await StudentModel.findOne({id});
    return result;
}
const deleteStudentFromDB = async (id:string) => {
    const result = await StudentModel.updateOne({id},{
        isDeleted: true
    });
    return result;
}
const updateStudentIntoDB = async (studentData: TStudent,id:string) => {
    const result = await StudentModel.updateOne({id}, studentData);
    return result;
}
export const StudentService = {
    createStudentIntoDB,
    getAllStudentsFromDB,
    getSingleStudentFromDB,
    deleteStudentFromDB,
    updateStudentIntoDB
}