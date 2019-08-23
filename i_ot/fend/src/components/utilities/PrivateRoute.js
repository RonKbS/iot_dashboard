import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            if (!localStorage.getItem('token')){
                return <Redirect to="/signin" />
            } else {
                return <Component {...props} />
            }
        }}
    />
)

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect()(PrivateRoute);