import { model, Schema } from "mongoose";
const usernameSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
        required: true,
    }
});
const guardianSchema = new Schema({
    fatherName: {
        type: String,
        required: true
    },
    fatherContactNo: {
        type: String,
        required: true,
    },
    fatherOccupation: {
        type: String,
    },
    motherName: {
        type: String,
        required: true,
    },
    motherContactNo: {
        type: String,
        required: true,
    },
    motherOccupation: {
        type: String,
        required: true,
    }
});
const localGuardianSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    occupation: {
        type: String,
        required: true,
    },
    contactNo: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    }
});
const studentSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: usernameSchema,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        enum: ['female', 'male'],
        required: true
    },
    profileImg: {
        type: String,
    },
    bloodGroup: {
        type: String,
        enum: ['A+', 'A-', 'AB-', 'B+', 'B-']
    },
    contactNo: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: String,
    },
    emergencyContactNo: {
        type: String,
        required: true,
    },
    guardian: {
        type: guardianSchema,
        required: true
    },
    isActive: {
        type: String,
        enum: ['Active', 'inActive'],
        default: 'Active'
    },
    localGuardian: {
        type: localGuardianSchema,
        required: true,
    },
    permanentAddress: {
        type: String,
        required: true,
    },
    presentAddress: {
        type: String,
        required: true,
    }
});
export const StudentModel = model('Student', studentSchema);
//# sourceMappingURL=student.model.js.map