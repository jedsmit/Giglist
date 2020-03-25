import React from "react";
import Title from "../../components/Title";
import UserLists from "../../components/UserLists";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "../../components/Navbar";
import "./home.css"


function Home() {

  return (
    <>
      <Navbar />

      <Row className="homepage">
        <Col xs={6}>
          <Title />
        </Col>
        <Col xs={5}>
          <UserLists />
        </Col>
      </Row>
    </>
  )
}

export default Home;