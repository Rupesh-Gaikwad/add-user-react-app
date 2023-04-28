
import React, {useState} from 'react';
import './App.css';
import AddUser from './Components/AddUser';
import ListUsers from './Components/ListUsers';

function App() {

  const [users, setUsers] = useState();

  const addUsers = (Uname, Uage) =>{
    if(!users){
      setUsers([{name: Uname, age: Uage}]);
    }
    else{
      setUsers((prevUsers) => [...prevUsers, {name: Uname, age: Uage}])
    }
  };

  return (
    <div className="App">
      <AddUser addNewUser={addUsers}/>
      <ListUsers users={users}/>
    </div>
  );
}

export default App;
