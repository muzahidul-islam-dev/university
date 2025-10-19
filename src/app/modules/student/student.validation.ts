import { z } from "zod";

const phoneRegex = /^[0-9+\-\s()]{6,20}$/;

const usernameValidationSchema = z.object({
  firstName: z.string().min(1, "firstName is required"),
  middleName: z.string(),
  lastName: z.string().min(1, "lastName is required"),
});

const guardianValidationSchema = z.object({
  fatherName: z.string().min(1, "fatherName is required"),
  fatherContactNo: z.string().min(1, "fatherContactNo is required").regex(phoneRegex, "fatherContactNo must look like a phone number"),
  fatherOccupation: z.string(),
  motherName: z.string().min(1, "motherName is required"),
  motherContactNo: z.string().min(1, "motherContactNo is required").regex(phoneRegex, "motherContactNo must look like a phone number"),
  motherOccupation: z.string().min(1, "motherOccupation is required"),
});

const localGuardianSchema = z.object({
  name: z.string().min(1, "local guardian name is required"),
  occupation: z.string().min(1, "occupation is required"),
  contactNo: z.string().min(1, "contactNo is required").regex(phoneRegex, "contactNo must look like a phone number"),
  address: z.string().min(1, "address is required"),
});

const studentValidationSchema = z.object({
  id: z.string().min(1, "id is required"),
  name: usernameValidationSchema,
  password: z.string().max(20),
  email: z.string().email("Invalid email"),
  gender: z.enum(["female", "male"]),
  profileImg: z.string(),
  bloodGroup: z.enum(["A+", "A-", "AB-", "B+", "B-"]).optional(),
  contactNo: z.string().min(1, "contactNo is required").regex(phoneRegex, "contactNo must look like a phone number"),
  dateOfBirth: z.string(),
  emergencyContactNo: z.string().min(1, "emergencyContactNo is required").regex(phoneRegex, "emergencyContactNo must look like a phone number"),
  guardian: guardianValidationSchema,
  isActive: z.enum(["Active", "inActive"]).default("Active"),
  localGuardian: localGuardianSchema,
  permanentAddress: z.string().min(1, "permanentAddress is required"),
  presentAddress: z.string().min(1, "presentAddress is required"),
});

export default studentValidationSchema;