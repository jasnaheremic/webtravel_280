import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import "./App.css"
import Post from "./pages/Post";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Write from "./pages/Write";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Prijave from "./pages/Prijave";
import AddUser from "./pages/AddUser";

function App() {
  const user = true;
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={ <Login/>}/>
      <Route path="/post/:id" element={<Post/>}/>
      <Route path="/register" element={<Register />} />
      <Route path="/prijave" element={<Prijave />} />
      <Route path="/write" element={<Write />} />
      <Route path="/adduser" element={<AddUser />} />
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
