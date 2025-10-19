import Joi from "joi";
// TUserName validation
const usernameValidation = Joi.object({
    firstName: Joi.string().required(),
    middleName: Joi.string().allow('', null),
    lastName: Joi.string().required(),
});
// TGuardian validation
const guardianValidation = Joi.object({
    fatherName: Joi.string().required(),
    fatherOccupation: Joi.string().allow('', null),
    fatherContactNo: Joi.string().required(),
    motherName: Joi.string().required(),
    motherOccupation: Joi.string().required(),
    motherContactNo: Joi.string().required(),
});
// TLocalGuardian validation
const localGuardianValidation = Joi.object({
    name: Joi.string().required(),
    occupation: Joi.string().required(),
    contactNo: Joi.string().required(),
    address: Joi.string().required(),
});
// TStudent validation
const studentValidation = Joi.object({
    id: Joi.string().required(),
    name: usernameValidation.required(),
    email: Joi.string().email().required(),
    gender: Joi.string().valid('male', 'female').required(),
    profileImg: Joi.string().uri().optional(),
    bloodGroup: Joi.string().valid('A+', 'A-', 'AB-', 'B+', 'B-').optional(),
    contactNo: Joi.string().required(),
    dateOfBirth: Joi.string().isoDate().optional(),
    emergencyContactNo: Joi.string().required(),
    guardian: guardianValidation.required(),
    localGuardian: localGuardianValidation.required(),
    presentAddress: Joi.string().required(),
    permanentAddress: Joi.string().required(),
    isActive: Joi.string().valid('Active', 'inActive').default('Active'),
});
export default studentValidation;
//# sourceMappingURL=student.validation.js.map