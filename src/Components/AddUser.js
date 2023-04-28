import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Error from "./Error";

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
            setError({title: "Invalid Username", inst: "Username field should not be empty!"})
        }
        else if(+enteredAge < 1){
            setError({title: "Invalid Age", inst: "Age field must be positive value( > 0 )!"})
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
            <form onSubmit={formHandler} className={classes.form_style}>
                <div className={classes.input_div}>
                    <label>Username: </label>
                    <input type="text" value={enteredName} onChange={handleName}/>
                </div>
                <div className={classes.input_div}>
                    <label>Age: </label>
                    <input type="number" value={enteredAge} onChange={handleAge}/>
                </div>
                <button type="submit" className={`${classes.input_div} ${classes.button_style}`}>Add User</button>
            </form>
        </Card>
        </>
    )

}

export default AddUser;