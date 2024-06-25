import { dbConfig } from "@/app/utils/dbconfig"
import mycompanymodel from "@/app/utils/model/companymodel"
import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcrypt"

export const GET = async() => {
    try{
        const find = await mycompanymodel.find()
        await dbConfig()
        return NextResponse.json({
            status: 200,
            message:"companies retrived",
            data: find
           })
    }catch(error:any){
       return NextResponse.json({
        status: 404,
        message:"error getting companies",
        error: error.message
       })
    }
}


export const POST = async(req:NextRequest) => {
    try{
        const {companyname,email,password,plan,plancost} = await req.json()
        await dbConfig()

        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(password, salt)

        const create = await mycompanymodel.create({companyname,email,password:hashed,role:"owner",plan,plancost})
        return NextResponse.json({
            status: 201,
            message:"signup successfully",
            data: create
           })
    }catch(error:any){
       return NextResponse.json({
        status: 404,
        message:"unable to signup",
        error: error.message
       })
    }
}