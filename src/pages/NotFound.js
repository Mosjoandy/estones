import React, { useEffect, useState, Component } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { Container, Row, Col } from "react-bootstrap";


function NotFound(){
    //will navigate to home page if the page is not found. after 3 seconds.
 const navigate = useNavigate();
 useEffect(() => {
    setTimeout(() => {
        navigate('/');
      }, "3000")
  },[]);
 

    return (
        <Container fluid>
            <h1>NOT FOUND</h1>
         </Container>
    );
  
};

export default NotFound;