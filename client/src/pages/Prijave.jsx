/*import React from "react";
import { posts } from "../data";




const Prijave = () => {

  const [posts, setPosts] = useState([])

  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);


  return (
    <div className="prijave">
      <h2 className="travel-list-title">Lista historije putovanja</h2>
      <ul className="travel-list">
        {posts.map((post) => (
          <li key={post.id} className="travel-item">
            <div><strong>{post.title}</strong></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Prijave;*/


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';

const Prijave = () => {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts`);
        setPosts(res.data || []);  // Ensure that res.data is not undefined
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className="prijave">
      <h2 className="travel-list-title">Lista historije putovanja</h2>
      <ul className="travel-list">
        {posts.map((post) => (
          <li key={post.id} className="travel-item">
            <div><strong>{post.title}</strong></div>
            <div><strong>Datum povratka: {new Date(post.returnDate).toLocaleDateString()}</strong></div> 
            <div><strong>Datum putovanja: {new Date(post.travelDate).toLocaleDateString()}</strong></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Prijave;
