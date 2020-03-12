import React from "react";
import Title from "../../components/Title";
import UserLists from "../../components/UserLists";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Calendar from "../../components/Calendar";
import Navbar from "../../components/Navbar";
import "./home.css"


function Home() {

  return (
    <>
      <Navbar />
      <Title />
      <Row>
        <Col xs={6}>
          <UserLists />
        </Col>
        <Col xs={6}>
          <Row>
            <Col xs={12}></Col>
          </Row>
          <Row>
            <Col xs={12}><Calendar></Calendar></Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Home;