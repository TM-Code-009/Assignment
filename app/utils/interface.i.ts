import { Document } from "mongoose";

export interface iCompany {
    companyname: string;
    email: string;
    role: string;
    logo: string;
    password: string;
    address: string;
    plan: string;
    plancost: string;
    staff: {}[];
    projects: {}[];
}

export interface iCompanyData extends iCompany, Document{}

export interface iStaff {
    companyname: string;
    email: string;
    role: string;
    logo: string;
    password: string;
    address: string;
    staff: {}[];
    projects: {}[];
}

export interface iStaffData extends iStaff, Document{}

export interface iProject {
    companyname: string;
    email: string;
    role: string;
    logo: string;
    password: string;
    address: string;
    staff: {}[];
    projects: {}[];
}

export interface iProjectData extends iProject, Document{}