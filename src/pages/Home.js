import React, { Component } from 'react';
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";

class Home extends Component {

    render() {
      
        return (
            <Container fluid>
                <Row>
                    <Col sm={12} xl>

                        <p>Hello World</p>
                        <a href='https://nhchan.com/e-stones/example' target="_blank" rel="noopener noreferrer">To the Tomb!</a>
                    </Col>
                </Row>
            </Container>
        );
    };
};


export default Home;

