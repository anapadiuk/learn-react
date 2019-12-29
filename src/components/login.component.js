import React, { Component } from "react";
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            password: '',
            errors: ''
        }

        this.handleSumbit = this.handleSumbit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value,
        })
    }

    handleSumbit = event => {
        const url = 'https://e.daruma.lt/api/v1/account/authenticate';

        axios.post(
            url,
            this.state
        )
        .then(response => {
            if (response.data.success) {
                this.props.handleSuccessfulAuth(response.data);
            }
        })
        .catch(error => {
            console.error('error from login', error);
        })
    }

    render() {

        return (
            <form onSubmit={this.handleSumbit} >
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>User name</label>
                    <input type="text"
                        className="form-control"
                        placeholder="User name"
                        name="userName"
                        value={this.state.userName}
                        onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary btn-block" >Submit</button>
            </form>
        );
    }
}