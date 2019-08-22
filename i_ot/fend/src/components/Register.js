import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { register } from '../actions/auth';

export class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: '',
        redirect: false
    }

    static getDerivedStateFromProps(props, state) {
      if (props.isRegistered === true) {
        return {
          ...state,
          redirect: true
        }
      }
      return null;
    }

    onSubmit = e => {
        e.preventDefault();
        const { 
          username, email,
          password, password2
         } = this.state;
        const payload = {
          username,
          email,
          password,
          password_confirm: password2
        };
        const { dispatch } = this.props;
        dispatch(register(payload));
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })

    render() {
        if (this.state.redirect) {
          return <Redirect to="/signin" />;
        }
        const { username, email, password, password2 } = this.state;
        return (
          <div className="col-md-6 m-auto">
            <div className="card card-body mt-5">
              <h2 className="text-center">Register</h2>
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
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={this.onChange}
                    value={email}
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
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password2"
                    onChange={this.onChange}
                    value={password2}
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
                <p>
                  Already registered? <Link to="/signin">Signin</Link>
                </p>
              </form>
            </div>
          </div>
        );
      }
}


const mapStateToProps = state => ({
  isRegistered: state.auth.isRegistered,
})


export default connect(mapStateToProps)(Register);
