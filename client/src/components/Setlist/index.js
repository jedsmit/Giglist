import React, { Component } from "react";


class Setlist extends Component {

    render() {
        return (

            <li className="list-group-item" key={this.props.key} >
                {this.props.name} {this.props.gigtype}
            </li>

        )
    }
}
export default Setlist;
