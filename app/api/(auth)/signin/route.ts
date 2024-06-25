import { dbconfig } from "@/app/utils/dbconfig";
import mycompanymodel from "@/app/utils/model/companymodel";
import { NextRequest, NextResponse } from "next/server";

export const POST = async(req:NextRequest) => {
    try{
        const {email,password} = await req.json()
        await dbconfig()

        const company = await mycompanymodel.create({email})
      if (company){
        
      }
    }catch(error:any){
       return NextResponse.json({
        status: 404,
        message:"unable to signup",
        error: error.message
       })
    }
}