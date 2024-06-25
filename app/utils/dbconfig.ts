import { connect } from "mongoose";
import { DB } from "./constant";

export const dbConfig = async () => {
  try {
    await connect("mongodb://127.0.0.1:27017/Taskproject").then(() => {
      console.clear();
      console.log("connected ❤️❤️🚀🚀");
    });
  } catch (error) {
    console.error();
  }
};