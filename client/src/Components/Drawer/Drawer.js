import React from "react";
import {Col, Container, Row} from "react-bootstrap"

const Drawer = () => {
    return (
        <Container>
            <Row>
                <Col xs>
                    <ul>
                        <li>Փափուկ</li>
                        <li>Laminat</li>
                        <li>veranorogum</li>
                        <li>atorner</li>
                    </ul>

                </Col>
                <Col xs={{ order: 12 }}></Col>
                <Col xs={{ order: 1 }}></Col>
            </Row>

        </Container>
    )
}


export default Drawer;