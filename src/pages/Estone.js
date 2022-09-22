import React, { Component, useState, useEffect } from 'react';
import { useParams, Navigate,  } from 'react-router-dom';
import "./Estone.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { UserInfo } from '../components/Data/ExampleUsers';
import Video from "../components/video_example.js"
import NotFound from './NotFound';

function GetSiteData ({stone, setStone, personID}){
    let paramID = '';
    let personId;

    //Checks the URL parmeters if stone does not have data. THis is for when people go straight tot he URL the stone is shown
    if(JSON.stringify(stone) === '{}'){
        //grabs the number from the URL
        for(let i = 0; i < personID.length ; i++){
            
            if(Number.isInteger(parseInt(personID[i]))){
                paramID = paramID + personID[i];            
            }
        }
        for (var key in UserInfo) {
           // checks for the url ending number against fake accounts.
            const index = UserInfo[key].findIndex(x => x.personID === parseInt(paramID));
            if(index > -1){
                setStone(UserInfo[key][index])//sets stone info shown.
                personId = UserInfo[key][index].personID; //sets personId to the stone's id to compare below
                break;
            }else{   

            }
    
        }
        //checks if the paramID and personId matches, if it still doesnt it will route to not found page.
        if(parseInt(paramID) != personId){
            return (<NotFound />);
    }}else{
        return (
            <Container>
                <Row>
                    <Col>
                    </Col>
                    <Col sm={12} xl >
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/02/58/21/50/360_F_258215071_9LsJ4zATYzIj92rKC9pOLt7qiJA3u7lt.jpg" />
                            <Card.Body>
                                <Card.Title className="text-center">{stone.firstName} {stone.middleName} {stone.lastName}</Card.Title>
                                <iframe
                                    width="100%"
                                    height="400px"
                                    src="https://www.youtube.com/embed/fhflUhBVGko?controls=0"
                                    title="Susie Wolfe Epitaph">
                                </iframe>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        );
    }
}




function Estone({stone, setStone})  {
let { personID } = useParams();
// let {stone} = route.params;

// useEffect(() => {


//   },[]);
    
   return <GetSiteData stone={stone} setStone={setStone} personID={personID}/>
    
};


export default Estone;

