import { config } from "dotenv";
const env = config();

export const PORT = process.env.PORT;
export const JWT_SECRET = process.env.JWT_SECRET;
export const email = process.env.email;
export const password = process.env.password;
export const minIOURL = process.env.minIOURL;
export const accessKey = process.env.accessKey;
export const secretAccessKey = process.env.secretAccessKey;
export const region = process.env.region

export const bucketName = process.env.bucketName