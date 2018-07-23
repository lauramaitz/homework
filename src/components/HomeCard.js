import React from "react";
import { Col, Row, Card, CardBody } from "reactstrap";

const HomeCard = props => (
    <Col md="4">
        <Card>
            <CardBody>
                <img src={props.img} height="200" width="100%" />
                <h3>{props.title}</h3>
                <p>Nightly price: {props.price}</p>
            </CardBody>
        </Card>
    </Col>

)

export default HomeCard;