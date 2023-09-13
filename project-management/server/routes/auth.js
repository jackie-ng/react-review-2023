// LOGIN & REGISTER
import express from "express"
import { logout, register, login } from "../controllers/auth.js "
// import { addPost } from "../controllers/post.js"

const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.post("/logoutlogout", logout)

export default router
