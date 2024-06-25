import { Schema, Types, model, models } from "mongoose";
import { iCompanyData } from "../interface.i";

const companymodel = new Schema<iCompanyData>({
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

const mycompanymodel = models.Companies || model<iCompanyData>("Companies",companymodel)

export default mycompanymodel