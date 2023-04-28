import { useState } from "react";
import Card from "../UI/Card";
import Error from "./Error";
import "./AddUser.css";

const AddUser = (props) =>{
    const [enteredName, setEnteredName] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState();

    const handleName = (event) => {
        setEnteredName(event.target.value);
    }

    const handleAge = (event) =>{
        setEnteredAge(event.target.value);
    }

    const formHandler = (event)=>{
        event.preventDefault();
        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({title: "Invalid Username!", inst: "Username field should not be empty."});
            return;
        }
        else if(+enteredAge < 1){
            setError({title: "Invalid Age!", inst: "Age field must be positive value( > 0 )."});
            return;
        }
        props.addNewUser(enteredName, enteredAge);
    };
                               
    const handleError = ()=>{
        setError(null);
    }

    return (
        <>

        {error && <Error errorInfo={error} resetError={handleError}/>}
        <Card>
            <form onSubmit={formHandler} className="form_style">
                <div className="input_div">
                    <label>Username</label>
                    <input type="text" value={enteredName} onChange={handleName}/>
                </div>
                <div className="input_div">
                    <label>Age</label>
                    <input type="number" value={enteredAge} onChange={handleAge}/>
                </div>
                <button type="submit" className="button_style">Add User</button>
            </form>
        </Card>
        </>
    )

}

export default AddUser;