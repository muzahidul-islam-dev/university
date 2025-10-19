export type TGuardian = {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNo: string;
    motherName: string;
    motherOccupation: string;
    motherContactNo: string;
};
export type TUserName = {
    firstName: string;
    middleName: string;
    lastName: string;
};
export type TLocalGuardian = {
    name: string;
    occupation: string;
    contactNo: string;
    address: string;
};
export type TStudent = {
    id: string;
    name: TUserName;
    gender: "male" | "female";
    email: string;
    avatar?: string;
    dateOfBirth: string;
    contactNo: string;
    emergencyContactNo: string;
    bloodGroup?: "A+" | "AB-" | "A+" | "A-" | "B+" | "B-";
    presentAddress: string;
    permanentAddress: string;
    guardian: TGuardian;
    localGuardian: TLocalGuardian;
    profileImg?: string;
    isActive: 'Active' | 'inActive';
};
//# sourceMappingURL=student.interface.d.ts.map