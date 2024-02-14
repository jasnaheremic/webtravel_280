import axios from "axios"
import { useState } from "react"
import React from "react"
import { useNavigate} from "react-router-dom"


const Register = () => {
    const [inputs, setInputs] = useState({
        username:"",
        email:"",
        password:""
    })
    const [err, setError] = useState(null);

    const navigate = useNavigate();

    const handleChange = e =>{
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try{
         await axios.post("/auth/register", inputs)
       navigate("/login");
    }catch(err){
        if(err.response){
            setError(err.response.data)
        }
    }
    }

    return (
        <div className="register">
            <h1 className="registerTitle">Register</h1>
            <div className="wrapper">
                <div className="center">

                    <input required type="text" placeholder="Username" name="username" onChange={handleChange} />
                    <input required type="email" placeholder="Email" name="email"  onChange={handleChange}/>
                    <input required type="password" placeholder="Password" name="password"  onChange={handleChange}/>
                    <button className="submit" onClick={handleSubmit}>Register</button>
                    {err && <p>{err}</p>}

                </div>
            </div>
        </div>
    )
}

export default Register