import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { signIn } from '../actions/auth';


export class Signin extends Component {
    state = {
        username: '',
        password: '',
        redirect: false
    }

    static getDerivedStateFromProps(props, state) {
      if (props.isLoggedIn === true) {
        return {
          ...state,
          redirect: true
        }
      }
      return null;
    }

    onSubmit = e => {
        e.preventDefault();
        const { username, password } = this.state;
        const payload = {
          username,
          password,
        };
        const { dispatch } = this.props;
        dispatch(signIn(payload));
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })

    render() {
        if (this.state.redirect) {
          return <Redirect to="/dashboard" />;
        }
        const { username, password } = this.state;
        return (
          <div className="col-md-6 m-auto">
            <div className="card card-body mt-5">
              <h2 className="text-center">Signin</h2>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    onChange={this.onChange}
                    value={username}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={this.onChange}
                    value={password}
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
                <p>
                  Not a member? <Link to="/register">Register</Link>
                </p>
              </form>
            </div>
          </div>
        );
      }
}


const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
})



export default connect(mapStateToProps)(Signin);
