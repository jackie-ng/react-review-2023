import { db } from '../db.js';
import bcrypt from "bcryptjs";

export const register = (req, res) => {
  // CHECK EXISTING USER
  const q = "SELECT * FROM users WHERE email = ? OR username = ?"
  db.query(q, [req.body.email], req.body.username, (err, data) => {
    if (err) return res.json(err)
    if (data.length) return res.status(409).json("User already exists");
    // HASH THE PASSWORD AND CREATE A USER
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt)
  })
}

export const login = (req, res) => {

}

export const logout = (req, res) => {

}
