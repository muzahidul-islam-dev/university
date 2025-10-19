import type { Model } from "mongoose";

export type TGuardian = {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNo: string;
    motherName: string;
    motherOccupation: string;
    motherContactNo: string;
}

export type TUserName = {
    firstName: string;
    middleName: string;
    lastName: string;
}
export type TLocalGuardian = {
    name: string;
    occupation: string;
    contactNo: string;
    address: string;
}
export type TStudent = {
    id: string;
    password: string;
    name: TUserName,
    gender: "male" | "female";
    email: string;
    avatar?: string;
    dateOfBirth: string;
    contactNo: string;
    emergencyContactNo: string;
    bloodGroup?: "A+" | "AB-" | "A+" | "A-" | "B+" | "B-" | undefined;
    presentAddress: string;
    permanentAddress: string;
    guardian: TGuardian;
    localGuardian: TLocalGuardian;
    profileImg?: string;
    isActive: 'Active' | 'inActive';
    isDeleted?: boolean;
}





// for createing static

export interface TStudentModel extends Model<TStudent>{
    isUserExists(id: string): Promise<TStudent | null>
}


// for createing instance

// export type TStudentMethod = {
//     isUserExists: (id: string) => Promise<TStudent | null>;
// }

// export type TStudentModel = Model<TStudent, Record<string, never>, TStudentMethod>