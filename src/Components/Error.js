import React from 'react';
import Card from '../UI/Card';
import "./Error.css";

export default function Error(props) {
  return (
    <div className="modal">
        <Card>  
        <h4>{props.errorInfo.title}</h4>
        <p>{props.errorInfo.inst}</p>
        <button>Okay</button>
        </Card>
    </div>
  )
}
