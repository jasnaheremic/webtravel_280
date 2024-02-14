import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";

const App = ({}) => {

    const { currentUser, logout } = useContext(AuthContext);

    const isAdmin = currentUser && currentUser.role === "admin";
    const isUser = currentUser && currentUser.role === "user";

    return (
    <div className="navbar">
        <span className="logo">
            <Link className="link"to="/" >Travel App</Link>
            </span>{
                isUser ? (

                
        <ul className="list">
            <li className="listItem">
                <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="avatar"/>
            </li>
            <li className="listItem">{currentUser?.username}</li>
           {isUser ? 
           <li className="listItem" onClick={logout}>Logout</li> : 
           !currentUser && <Link className="listItem" to={"/login"}>Login</Link>}
             <li className="listItem"><Link className="link" to="/?cat=europa">Europa</Link></li>
             <li className="listItem"><Link className="link" to="/?cat=daleka">Daleka putovanja</Link></li>
             <li className="listItem"><Link className="link" to="/?cat=ljetovanja">Ljetovanja</Link></li>
            <li className="listItem"><Link className="link" to={"prijave"}>Prijavljena putovanja</Link></li>
        </ul>
        ) : (currentUser ? null : <Link className="listItem" to={"/login"}>Login</Link>)
        }
        
         {isAdmin && (
        <ul className="list">
            <li className="listItem">
                <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="avatar"/>
            </li>
            <li className="listItem">{currentUser?.username}</li>
           {currentUser &&
           <li className="listItem" onClick={logout}>Logout</li>}
             <li className="listItem"><Link className="link" to="/?cat=europa">Europa</Link></li>
             <li className="listItem"><Link className="link" to="/?cat=daleka">Daleka putovanja</Link></li>
             <li className="listItem"><Link className="link" to="/?cat=ljetovanja">Ljetovanja</Link></li>
             <li className="listItem"><Link className="link" to="/adduser">Korisnici</Link></li>
            <li className="listItem"><Link className="link" to={"write"}>Dodaj putovanja</Link></li>
        </ul>
        )
        }

    </div>
    )
}

export default App;