import { connect } from "mongoose";
import { DB } from "./constant";


export const dbconfig = async() => {
    try {
        await connect("mongodb://localhost:3000/Taskproject").then(() => {
            console.clear();
            console.log("server up");
            
        })
    } catch (error) {
        console.error(error);
    }
}