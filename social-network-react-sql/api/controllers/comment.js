import { db } from "../connect.js"

export const getComments = (req, res) => {
  const q = `SELECT c.*, u.id AS userId, name, profilePic FROM comments AS c JOIN users AS i ON (u.id = c.userId) WHERE c.postId = ? ORDER BY c.createdAT DESC`

  db.query(q, [req.query.postIdk], (err, data) => {
    if (err) return res.status(500).json(err)
    return res.status(200).json(data);
  })
}
