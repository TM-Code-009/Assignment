import { Schema, Types, model, models } from "mongoose";
import { iCompanyData, iStaffData } from "../interface.i";

const staffmodel = new Schema<iStaffData>({
    companyname:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    address:{
        type:String
    },
    role:{
        type:String
    },
    logo:{
        type:String
    },
    staff:[{
        type:Types.ObjectId,
        ref: "companies"
    }],
    projects:[{
        type:Types.ObjectId,
        ref: "Projects"
    }],
},{timestamps:true})

const mystaffmodel = models.Staff || model<iStaffData>("Staff",staffmodel)

export default mystaffmodel