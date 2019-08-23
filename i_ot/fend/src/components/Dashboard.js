import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import getGraphData from "../actions/iot";
import C3Chart from "react-c3js";

import NavBar from "./NavBar";

export class Dashboard extends Component {
  state = {
    data: null
  };

  static getDerivedStateFromProps(props, state) {
    if (props.data) {
      return {
        ...state,
        data: props.data
      };
    }
    return null;
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getGraphData());
  }

  render() {
    const { data } = this.state;
    let initialColumnValue = 0;
    if (data && data.channel && data.feeds) {
      let m = data.feeds.map(field => parseInt(field.field1));
      let n = data.feeds.map(field => parseInt(field.field2));
      let o = data.feeds.map(
        field => (initialColumnValue += new Date(field.created_at).getSeconds())
      );
      const chart = {
        x: "x",
        title: data.channel.description,
        columns: [
          ["x", ...o],
          ['"Light"', ...m],
          ['"Outside Temperature"', ...n]
        ]
      };
      return (
        <Fragment>
          <div className="container">
            <NavBar />
          </div>
          <div>
            <div
              id="chart"
              className="cotainer"
            >
              <C3Chart data={chart} />
            </div>
          </div>
        </Fragment>
      );
    }
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.ts_data.graphData
});

export default connect(mapStateToProps)(Dashboard);
