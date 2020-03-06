import React from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import "./style.css"
function Song() {
  return (
    <div className="table">

      <Table className="table" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Song Title</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Key</th>
            <th>BPM</th>
            <th>Add song</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Everybody Poops</td>
            <td>Toilet Bowl Cleaners</td>
            <td>Shit Music</td>
            <td>Brown Note</td>
            <td>Shitty pace</td>
            <td><Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Click Me!" />
            </Form.Group></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>@fat</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}


export default Song;