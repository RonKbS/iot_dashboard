import React, { Component } from "react";
import { connect } from "react-redux";
import getGraphData from "../actions/iot";
import C3Chart from "react-c3js";


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
    let initialColumnValue = 0
    if (data && data.channel && data.feeds) {
      let m = data.feeds.map(field => parseInt(field.field1));
      let n = data.feeds.map(field => parseInt(field.field2));
      let o = data.feeds.map(
        field => initialColumnValue += new Date(field.created_at).getSeconds()
      );
      const chart = {
        x: 'x',
        columns: [
          ['x', ...o],
          ['"Light"', ...m],
          ['"Outside Temperature"', ...n]
        ],
      };
      return (
        <div>
          <div id="chart">
            <C3Chart data={chart} />
          </div>
        </div>
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
