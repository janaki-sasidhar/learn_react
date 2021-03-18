import React, { Component } from 'react';
class UserInput extends Component {
    state = {  }
    render() {
        return (
            <div className="section">
                <input className="input is-primary is-focused"  value={this.props.default}  onChange={this.props.change} type="text" placeholder="enter something"/>
            </div>
         );
    }
}

export default UserInput;