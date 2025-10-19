import type { Request, Response } from "express";
import { StudentService } from "./student.service.js";
import { StudentModel } from "./student.model.js";
import Joi from "joi";
import studentValidation from "./student.joi.validation.js";
import z from "zod";
import studentValidationSchema from "./student.validation.js";

const createStudent = async (req: Request, res: Response) => {

    try {




        const { student: studentData } = req?.body;


        const zodParseData = studentValidationSchema.parse(studentData)
        const result = await StudentService.createStudentIntoDB(zodParseData);
        return res.status(200).json({
            success: true,
            message: 'Student Created Successfully',
            data: result
        })

    } catch (error:any) {
        res.status(500).json({
            status: false,
            message: error.message || 'something went wrong.',
            error
        })
    }
}

const getAllStudents = async (req: Request, res: Response) => {
    try {



        const result = await StudentService.getAllStudentsFromDB();
        res.status(200).json({
            success: true,
            message: 'Student are retrieved Successfully',
            data: result
        })
    } catch (error) {
        console.log(error)
    }
}
const getSingleStudent = async (req: Request, res: Response) => {
    try {
        const { studentId } = req.params
        const result = await StudentService.getSingleStudentFromDB(studentId as string);
        res.status(200).json({
            success: true,
            message: 'Student are retrieved Successfully',
            data: result
        })
    } catch (error) {
        console.log(error)
    }
}
const deleteStudent = async (req: Request, res: Response) => {
    try {
        const { studentId } = req.params
        const result = await StudentService.deleteStudentFromDB(studentId as string);
        res.status(200).json({
            success: true,
            message: 'Student are deleted Successfully',
            data: result
        })
    } catch (error) {
        console.log(error)
    }
}

const updateStudent = async (req: Request, res: Response) => {
    try{

    }catch(error: any){
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong.',
            error
        })
    }
}


export const StudentController = {
    createStudent,
    getAllStudents,
    getSingleStudent,
    deleteStudent,
    updateStudent
}