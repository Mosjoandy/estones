import React, { useState, Component } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Estone.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import {Users} from '../../components/Data/ExampleUsers';


function Login({setUserID, setLoggedIn})  {
const [password, setPassword] = useState('');
const [email, setEmail] = useState('');
const navigate = useNavigate();

function getInfo(e) {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  }
//this looks for the users within the Example Users.js
const sumbitAction = (e) =>{
    e.preventDefault();
    //searches for user index by email
    const inputEmailIndex = Users.findIndex(x => x.userEmail === email);
//checks if the email is within the example users. If index returns -1 then it doesn't exist.
    if(inputEmailIndex > -1){
        if(Users[inputEmailIndex].userPassword === password){
            console.log('logged in');
            setUserID(Users[inputEmailIndex].uuid);
            setLoggedIn(true);
            navigate('/', {replace: true});
            
            
        }else{
            console.log('something isnt right.');
        }
    }
    console.log(inputEmailIndex);
}


        return (
            <Container> 
            <form onSubmit={(e)=>{sumbitAction(e)}}>
                <input
                className="form-input"
                name="email"
                onChange={getInfo}
                type="email"
                placeholder="Email"
                value={email}
                />
                 <input
                className="form-input"
                name="password"
                onChange={getInfo}
                type="password"
                placeholder="password"
                value={password}
                />
                <button className="form-button" type="submit">
                Login
                </button>
            </form>
            </Container>
        );
    
};


export default Login;
