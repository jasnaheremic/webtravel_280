import {db} from "../db.js"
import jwt from "jsonwebtoken"
/*
export const getPosts = (req, res)=>{
    const q = req.query.cat 
    ? "SELECT * FROM posts WHERE category=?"
    : "SELECT * FROM posts";

    db.query(q,[req.query.cat], (err, data)=> {
        if(err) return res.status(500).send(err)

        return res.status(200).json(data);
    })
};*/

export const getPosts = (req, res) => {
    const q = req.query.cat
      ? "SELECT * FROM posts WHERE category=?"
      : "SELECT * FROM posts";
  
    db.query(q, [req.query.cat], (err, data) => {
      if (err) return res.status(500).send(err);
  
      return res.status(200).json(data);
    });
  };

export const getPost = (req, res)=>{
    const q = "SELECT `id`,`title`, `descr`, `img`, `travelDate`, `returnDate`, `category` FROM posts WHERE id = ?";

    db.query(q, [req.params.id], (err, data) => {
        if(err) return res.status(500).json(err)

        return res.status(200).json(data[0]);
    })
};

export const addPost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "INSERT INTO posts(`title`, `descr`, `img`, `category`, `uId`) VALUES (?)";

    const values = [
      req.body.title,
      req.body.descr,
      req.body.img,
      req.body.category,
      userInfo.id,
    ];
    
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Post has been created.");


      
    });
  });
};

export const deletePost = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");
  
    jwt.verify(token, "jwtkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
  
      const postId = req.params.id;
      const q = "DELETE FROM posts WHERE `id` = ? AND `uId` = ?";
  
      db.query(q, [postId, userInfo.id], (err, data) => {
        if (err) return res.status(403).json("You can delete only your post!");
  
        return res.json("Post has been deleted!");
      });
    });
  };

  export const updatePost = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");
  
    jwt.verify(token, "jwtkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
  
      const postId = req.params.id;
      const q =
        "UPDATE posts SET `title` =?, `descr` =?, `img` =?, `category` =? WHERE `id` = ?";
  
      const values = [
        req.body.title,
        req.body.descr,
        req.body.img,  
        req.body.category];

        console.log("Received values:", values);
  
      db.query(q, [...values, postId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json("Post has been updated.");
      });
    });
  };