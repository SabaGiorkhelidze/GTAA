import {
  S3Client,
  PutObjectCommand,
  CreateBucketCommand,
  DeleteObjectCommand,
  DeleteBucketCommand,
  paginateListObjectsV2,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { minIOURL, accessKey, secretAccessKey, region } from "../config.js";

// Create an instance of the S3 service
export const s3Client = new S3Client({
  region: region,
  endpoint: minIOURL,
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretAccessKey,
  },
});
