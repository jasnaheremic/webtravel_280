import { useEffect, useState } from "react";
import axios from 'axios';

const AddUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
      
        const res = await axios.get(`http://localhost:8800/backend/users/adduser`);

        console.log(res.data); 
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
  
    fetchData();
  }, []); 



  return (
    <div className="prijave">
      <h2 className="travel-list-title">Lista korisnika</h2>
      <ul className="travel-list">
        {users.map((user) => (
          <li key={user.id} className="travel-item">
            <div><strong>{user.username}</strong></div>
            <div><strong>{user.email}</strong></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddUser;
