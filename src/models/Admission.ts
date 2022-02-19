import { format } from 'date-fns';

export interface Admission {
  Id: number;
  Name: string;
  SubmissionDate: string;
  FatherName: string;
  ContactNo: string;
  City: string;
  Address: null;
  AdmissionRequiredIn: null;
  SchoolLastAttend: null;
  Comments: null;
}

export interface AppAdmission {
  id: number;
  name: string;
  submissionDate: Date;
  submissionFormatedDate: string;
  fatherName: string;
  contactNo: string;
  city: string;
  address: null;
  admissionRequiredIn: null;
  schoolLastAttend: null;
  comments: null;
}

export function toAppAdmission(admission: Admission): AppAdmission {
  return {
    id: admission.Id,
    name: admission.Name,
    submissionDate: new Date(admission.SubmissionDate),
    submissionFormatedDate: format(
      new Date(admission.SubmissionDate),
      'MMM dd, yyyy'
    ),
    fatherName: admission.FatherName,
    contactNo: admission.ContactNo,
    city: admission.City,
    address: admission.Address,
    admissionRequiredIn: admission.AdmissionRequiredIn,
    schoolLastAttend: admission.SchoolLastAttend,
    comments: admission.Comments,
  };
}
export function fromAppAdmission(appAdmission: AppAdmission): Admission {
  return {
    Id: appAdmission.id,
    Name: appAdmission.name,
    SubmissionDate: appAdmission.submissionDate.toJSON(),
    FatherName: appAdmission.fatherName,
    ContactNo: appAdmission.contactNo,
    City: appAdmission.city,
    Address: appAdmission.address,
    AdmissionRequiredIn: appAdmission.admissionRequiredIn,
    SchoolLastAttend: appAdmission.schoolLastAttend,
    Comments: appAdmission.comments,
  };
}
