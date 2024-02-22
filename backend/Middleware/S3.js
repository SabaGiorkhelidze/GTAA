import {
    S3Client,
    PutObjectCommand,
    CreateBucketCommand,
    DeleteObjectCommand,
    DeleteBucketCommand,
    paginateListObjectsV2,
    GetObjectCommand,
  } from "@aws-sdk/client-s3";
export const minIOURL = "http://127.0.0.1:9000";

// Create an instance of the S3 service
export const s3Client = new S3Client({
  region: "eu-central-1",
  endpoint: minIOURL,
  credentials: {
    accessKeyId: "dev",
    secretAccessKey: "password123",
  },
});