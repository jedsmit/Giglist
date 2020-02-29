import React from "react";
import Title from "../../components/Title";
import UserLists from "../../components/UserLists";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
    return (
        <>
            <Title />
            <Row>
                <Col xs={4}>
                    <UserLists />
                </Col>
            </Row>
        </>
    )
}

export default Home;