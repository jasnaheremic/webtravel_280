import { useEffect, useState } from "react"
import Card from "../components/Card"
import {posts} from "../data"
import axios from 'axios';
import { useLocation } from "react-router-dom";

const Home = () => {


   /* const cat = useLocation().search;*/

    const [posts, setPosts] = useState([])

    const cat = useLocation().search

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`/posts${cat}`);
          setPosts(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }, [cat]);


/*
useEffect(()=>{
    const fetchData = async () => {
        try{
            const res = await axios.get(`/posts${cat}`);
            setPosts(res.data)
        }catch(err){
            console.log(err)
        }
    }

    fetchData();
},[cat])
*/

    return (
        <div className="home">
            {posts.map(post=>(
                <Card key={post.id} post={post}/>
            ))}
        </div>
    )
}

export default Home