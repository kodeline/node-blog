import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/authRoutes.js"
import userRoutes from "./routes/usersRoutes.js"
import postRoutes from "./routes/postsRoutes.js"

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Node mode On");
})


app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)

app.listen(PORT, () => console.log(`Server on port: $${PORT}`))

