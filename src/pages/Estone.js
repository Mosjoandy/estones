import React, { Component } from 'react';
import "./Estone.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import Video from "../components/video_example.js"

class Estone extends Component {

    render() {

        return (
            <Container>
                <Row>
                    <Col>
                    </Col>
                    <Col sm={12} xl >
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/02/58/21/50/360_F_258215071_9LsJ4zATYzIj92rKC9pOLt7qiJA3u7lt.jpg" />
                            <Card.Body>
                                <Card.Title className="text-center">Susie Wolfe</Card.Title>
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
    };
};


export default Estone;

