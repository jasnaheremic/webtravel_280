import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios"
import { useLocation, Navigate, useNavigate } from 'react-router-dom';


const Write = () => {

  const state = useLocation().state;
    const [value, setValue] = useState(state ?.descr || '');
    const [title, setTitle] = useState(state ?.title || '');
    const [file, setFile] = useState(null);
    const [category, setCat] = useState(state?.category || '');
    

    const upload = async ()=>{
      try{
        const formData = new FormData();
        formData.append("file", file)
        const res = await axios.post("/uploads", formData)
        return res.data
      }catch(err){
        console.log(err)
      }
    }

    const navigate = useNavigate();

    const handleClick = async (e) => {
      e.preventDefault();
      const imgUrl = await upload();

      try {
        state
          ? await axios.put(`/posts/${state.id}`, {
            title,
            descr: value,
            category,
            img: file ? imgUrl : '',
            })
          : await axios.post(`/posts/`, {
            title,
            desc: value,
            category,
            img: file ? imgUrl : ''
            });
            navigate("/")
      } catch (err) {
        console.log(err);
      }
    };

  return (
    <div className='write'>
      <div className='content'>
        <input type='text' value={title} placeholder='Title' onChange={e=>setTitle(e.target.value)}/>
        <div className="editorContainer">
        <ReactQuill
          className="editor"
          theme="snow" 
          value={value || ''}
          onChange={setValue} />
        </div>

      </div>
      <div className='menu'>
        <div className="item">
            <h1>Publish</h1>
            <span>
                <b>Status: </b> Draft
            </span>
            <span>
                <b>Visibility: </b> Public
            </span>
            <input style={{display:"none"}} type='file' id="file" name="" onChange={e=>setFile(e.target.files[0])}/>
            <label className="file" htmlFor='file'>Upload image</label>
            <div className="buttons">
                <button className='save'>Save as a draft</button>
                <button className='update' onClick={handleClick}>Publish</button>
            </div>
        </div>
        <div className="item">
            <h1>Category</h1>
            <div className='cat'>
            <input type='radio' checked={category === 'Europa'} name='cat' value="Europa" id='Europa'  onChange={(e) => setCat(e.target.value)}/>
            <label htmlFor='Europe'>Europa</label>
            </div>
            <div className='cat'>
            <input type='radio' checked={category === "Daleka"} name='cat' value="Daleka" id='Daleka' onChange={(e) => setCat(e.target.value)}/>
            <label htmlFor='daleka'>Daleka putovanja</label>
            </div>
            <div className='cat'>
            <input type='radio' checked={category === "Ljetovanja"} name='cat' value="Ljetovanja" id='Ljetovanja' onChange={(e) => setCat(e.target.value)}/>
            <label htmlFor='ljetovanja'>Ljetovanja</label>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Write
