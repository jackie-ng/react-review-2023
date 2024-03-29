import express from "express";
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import cors from "cors";
import cookieParser from "cookie-parser";

// If there's an auth problem
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';
// Express server middleware
const app = express();
// app.use(cors());
// app.use(cors({ origin: true, credentials: true }));
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)



app.get("/test", (req, res) => {
  res.json("hello");
});


app.listen(8800, () => {
  console.log("Connected to backend.");
});
