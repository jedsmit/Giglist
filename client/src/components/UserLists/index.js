import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "./style.css"
import { Link } from "react-router-dom";
import Setlist from "../Setlist";
import API from "../../utils/API"



class UserLists extends Component {

  state = {
    setlists: [{}]
  };

  getSetlists = () => {
    API.getSetlists()
      .then(response => this.setState({ setlists: response.data }))
  };

  render() {
    return (
      <Container>
        <Card>
          <Card.Header><div className="row"><div className="col-sm-9"><h4>Your Setlists</h4></div><div className="col-sm-3"><Link to="/create-setlist"><button type="button" className="btn btn-success float-right" >Create New</button></Link></div></div></Card.Header>
          <Card.Body>

            <ul>
              {this.getSetlists()}
              {
                this.state.setlists.map((setlist) => {
                  return <Setlist
                    key={setlist._id}
                    name={setlist.name}
                    gigtype={setlist.gigtype}
                  />
                })
              }
            </ul>

          </Card.Body>
        </Card>

      </Container>
    )
  }
}


export default UserLists;