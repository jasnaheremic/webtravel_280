
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const Login = () => {

    const [inputs, setInputs] = useState({
        username:"",
        password:""
    })
    const [err, setError] = useState(null);

    const navigate = useNavigate();

    const {login} = useContext(AuthContext);

    const handleChange = e =>{
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try{
        await login(inputs);
       navigate("/");
    }catch(err){
        if(err.response){
            setError(err.response.data)
        }
    }
    }

    return (
        <div className="login">
            <h1 className="loginTitle">Login</h1>
            <div className="wrapper">
                <div className="center">

                    <input type="text" placeholder="Username" name='username' onChange={handleChange}/>
                    <input type="text" placeholder="Password" name='password' onChange={handleChange}/>
                    <button onClick={handleSubmit} className="submit">Login</button>
                    <p>
                        {err && <p>{err}</p>}
            Don't have an account? <Link to="/register">Register</Link>
          </p>

                </div>
            </div>
        </div>
    )
}

export default Login