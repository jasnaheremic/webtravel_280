import express from "express"
import authRoutes from "./routes/auth.js"
import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/users.js"
import cookieParser from "cookie-parser"
import multer from "multer"

import cors from "cors";

const app = express()



app.use(express.json())
app.use(cookieParser())

app.use(cors());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../client/public/uploads");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
  });
  
  const upload = multer({ storage });

app.post("/backend/uploads", upload.single("file"), function (req, res) {
    const file = req.file;
    res.status(200).json(file.filename);
  });

app.use("/backend/posts", postRoutes)
app.use("/backend/users", userRoutes)
app.use("/backend/auth", authRoutes)


app.listen(8800, ()=>{
    console.log("Connected to backend!")})