export type UserRole = 'Principal' | 'Operator' | 'Teacher' | 'Accountant' | 'Administrator';

export interface SchoolSettings {
  schoolName: string;
  schoolLogo: string;
  schoolAddress: string;
  currency: string;
}

export interface Student {
  id: string;
  registrationNo: string;
  name: string;
  photo?: string;
  class: string;
  gender: 'Male' | 'Female';
  religion: 'Muslim' | 'Christian' | 'Hindu' | 'Qadiani' | 'Ahmadi';
  dob: string;
  pob: string;
  address: string;
  lastSchool: string;
  siblings: string[]; // IDs
  category: string;
  fatherName: string;
  motherName: string;
  fatherOccupation: string;
  motherOccupation: string;
  mobileNo: string;
  whatsappNo: string;
  applicant: string;
  admissionType: 'New' | 'Transfer';
  registrationDate: string;
  formSubmitDate: string;
  admissionFee: number;
}

export interface AttendanceRecord {
  studentId: string;
  date: string;
  status: 'Present' | 'Absent' | 'Leave';
  type: 'Manual' | 'Barcode' | 'Biometric';
}

export interface Class {
  id: string;
  name: string;
  number: string;
  level: 'Primary' | 'Elementary' | 'Higher';
  subjects: string[];
}

export interface Exam {
  id: string;
  name: string;
  subjects: string[];
  classes: string[];
  passingMarks: number;
}

export interface FeeInvoice {
  id: string;
  studentId: string;
  month: string;
  issueDate: string;
  dueDate: string;
  tuitionFee: number;
  transportFee: number;
  fine: number;
  discount: number;
  status: 'Paid' | 'Unpaid';
}
