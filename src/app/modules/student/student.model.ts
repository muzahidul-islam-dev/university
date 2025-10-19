import { model, Schema } from "mongoose";
import type { TGuardian, TLocalGuardian, TUserName, TStudent, TStudentModel } from "./student.interface.js";
import bcrypt from 'bcrypt'
import { config } from "../../config/index.js";
const usernameSchema = new Schema<TUserName>({
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
})

const guardianSchema = new Schema<TGuardian>({
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
})
const localGuardianSchema = new Schema<TLocalGuardian>({
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

const studentSchema = new Schema<TStudent, TStudentModel>({
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
    },
    password: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }

},{
    toJSON: {
        virtuals: true
    }
})


// vertual

studentSchema.virtual('fullName').get(function(){
    return `${this.name.firstName}  ${this.name.middleName} ${this.name.lastName}`
})



// pre save middleware / hook

studentSchema.pre('save',async function(next){
    const user = this;
    user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt_rounds))
    next()
})

studentSchema.post('save',function(doc, next){
    doc.password = '';
    next();
})


studentSchema.pre('find',function(next){
    this.find({
        isDeleted: {$ne: true}
    })
    next();
})
studentSchema.pre('findOne',function(next){
    this.find({
        isDeleted: {$ne: true}
    })
    next();
})
studentSchema.pre('aggregate',function(next){
    this.pipeline().unshift({
        $match: {
            isDeleted: {$ne: true}
        }
    })
    next();
})




// Creating student instance
// studentSchema.methods.isUserExists = async function(id: string){
//     const existingUser = await StudentModel.findOne({id})
//     return existingUser;
// }

// createing a custom static method

studentSchema.statics.isUserExists = async function(id: string){
    const existingUser = await StudentModel.findOne({id})
    return existingUser;
}


export const StudentModel = model<TStudent, TStudentModel>('Student',studentSchema);