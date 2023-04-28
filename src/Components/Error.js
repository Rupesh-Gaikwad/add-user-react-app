import React from 'react';
import Card from '../UI/Card';
import "./Error.css";

export default function Error(props) {

  const onConfirm = () =>{
    props.resetError();
  }
  return (
    <div className="modal" onClick={onConfirm}>
        <div className="error_display_box">  
        <h4 className="title">{props.errorInfo.title}</h4>
        <p className="desc">{props.errorInfo.inst}</p>
        <button onClick={onConfirm} className="confirm_btn">OK</button>
        </div>
    </div>
  )
}
