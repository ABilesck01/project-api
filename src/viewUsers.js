import * as React from 'react';
import './ViewUsers.css';
import ItemViewUser from './ItemViewUser';

function ViewUser() {
    
    const [users, setUsers] = React.useState([]);

    const asyncLoadUsers = async () => 
    {
        const response = await fetch("https://reqres.in/api/users/");
        const data = await response.json();
        setUsers(data.data);
    }

    asyncLoadUsers();
    
    let lista = users.map((user) => 
    {
        return <ItemViewUser 
        key={user.id} 
        first_name={user.first_name} 
        email={user.email} 
        avatar={user.avatar} />
    }); 

    return (
      <div className="view">
           {lista}
      </div>
    );
  }
  
  export default ViewUser;