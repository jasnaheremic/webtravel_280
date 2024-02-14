import {db} from "../db.js"

export const getUsers = (req, res) => {
  const q = req.query.users
  ? "SELECT `username`, `email` FROM users WHERE role = 'user'"
  : "SELECT * FROM users WHERE role = 'user'";
  
    db.query(q, [req.query.users], (err, data) => {
      if (err) {
      console.log(err); // Add this line
      return res.status(500).send(err);
    }
      console.log(data); // Add this line
      return res.status(200).json(data);
    });
  };


