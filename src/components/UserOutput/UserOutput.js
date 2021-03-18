import React, { Component } from 'react';
class UserOutput extends Component {
    state = {  }
    render() {
        return (
            <div className="container">
                    <p>{this.props.someoutput}</p>
                <br></br>
            </div>
         );
    }
}

export default UserOutput;