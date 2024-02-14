import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/authContext";

const Post = () => {
  const { currentUser } = useContext(AuthContext);

  const [post, setPost] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

useEffect(()=>{
  const fetchData = async () => {
      try{
          const res = await axios.get(`/posts/${postId}`);
          setPost(res.data)
      }catch(err){
          console.log(err)
      }
  }

  fetchData();
},[postId]);

  //const post = posts.find((p) => p.id.toString() === path);

  // State to manage comments
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleAddComment = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  const handleDelete = async ()=>{
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  }

  const isAdmin = currentUser && currentUser.role === "admin";
  const isUser = currentUser && currentUser.role === "user";

  return (
    <div className="post">
      <img src={post?.img} alt="" className="postImg" />
      <h1 className="postTitle">{post.title}</h1>
      
      {/*<h4 className="travelDate">Datum putovanja: {post.travelDate?.toDateString()}</h4>
      <h4 className="returnDate">Datum povratka: {post.returnDate?.toDateString()}</h4>*/}
      
      {post.travelDate && (
      <h4 className="travelDate">Datum putovanja: {new Date(post.travelDate).toDateString()}</h4>
    )}
    {post.returnDate && (
      <h4 className="returnDate">Datum povratka: {new Date(post.returnDate).toDateString()}</h4>
    )}

      <h4 className="returnDate">Kategorija: {post.category}</h4>
      <p className="postDesc">{post.descr}</p>
      <p className="postLongDesc">{post.descr}</p>

      <div className="commentsSection">
            <div className="commentCenter">
        <ul className="commentList">
          {comments.map((comment, index) => (
            <li key={index} className="commentItem">{comment}</li>
          ))}
        </ul>
        <textarea
          placeholder="Leave a comment..."
          value={comment}
          onChange={handleCommentChange}
          className="commentTextarea"
        />
        <button onClick={handleAddComment} className="commentButton">Add Comment</button>
      </div>
      </div>
      
      {
        isUser && 
        (<button className="prijaviSe">Prijavi se</button>)}

      
      {isAdmin && (
        <div>
          <button onClick={handleDelete} className="adminButton">Obrisi</button>
          <Link to={`/write?edit=2`} state={post}>
            <button className="adminButton">Ažuriraj</button>
            </Link>
        </div>
      )}



    </div>
  );
};

export default Post;
