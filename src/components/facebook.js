
import React, { Component } from 'react';
import { FacebookProvider, LoginButton } from 'react-facebook';
require('dotenv').config();

export default class Facebook extends Component {
    state = {
        isLogin: false,
        userId: '',
        email: ''
    }
    handleResponse = (data) => {
        console.log(data);
    }

    handleError = (error) => {
        this.setState({ error });
    }

    render() {
        if (this.state.isLogin) {
            return null;
        } else {
            return (
                <FacebookProvider appId={process.env.REACT_APP_API_KEY}>
                    <LoginButton
                        scope="email"
                        onCompleted={this.handleResponse}
                        onError={this.handleError}
                    >
                        <span>Login via Facebook</span>
                    </LoginButton>
                </FacebookProvider>
            );
        }
    }
}