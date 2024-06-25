import dotenv from "dotenv"
dotenv.config()

export const DB = process.env.DB_STRING as string;

export const UTL = process.env.API_URL as string;