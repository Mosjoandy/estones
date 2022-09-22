import React, { useEffect, useState, Component } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import {UserInfo} from '../components/Data/ExampleUsers';

function Home({userID, loggedIn, setLoggedIn, setStone}){
const [userStones , setUserStones] = useState(UserInfo[userID]);
 const navigate = useNavigate();
 

    const openInNewTab = (e, stone) => {
        e.preventDefault();
     
        setStone(stone);
        //navigates page to stone's information. Makes it Dynamic
        navigate(`/${stone.firstName}-${stone.lastName}.${stone.personID}`, {replace : false, otherParam: stone})
      };

  if (!loggedIn) {
    return <Navigate replace to="/login" />;
  } else {
    return (
        <Container fluid>
             {userStones.map((stone)=>{
               {console.log(stone.firstName)}
                  return  <div key={stone.personID} onClick={(e)=>{openInNewTab(e, stone)}}> 
                             <h1>{stone.firstName} {stone.middleName[0]}. {stone.lastName}</h1>
                        </div>
                    })}
         </Container>
    );
  }
};



   
      
    //     return (
    //        
    //     );
    
//};


export default Home;

