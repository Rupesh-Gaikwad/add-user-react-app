import React from 'react'
import Card from '../UI/Card'
import "./ListUsers.css";

export default function ListUsers(props) {
  return (
    <Card>
        <ul>
        {props.users && props.users.map((user) =>{
            return <li>{`${user.name} is of age ${user.age}`}</li>
        })}
        </ul>
        
    </Card>

  )
}
