import multer from "multer";
import path from "path";

export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Set a fixed upload destination for consistency
    // Consider using dynamic paths for better organization
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    // Generate unique filenames
    const now = Date.now();
    const ext = path.extname(file.originalname);
    cb(null, `${now}-${file.fieldname}${ext}`);
  },
});

export const upload = multer({ storage: storage });