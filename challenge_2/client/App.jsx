import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Chart from "chart.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: [],
      data: []
    };
    this.myChart = React.createRef();
  }

  buildChart() {
    let ctx = this.myChart.current.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.state.labels,
        datasets: [{label: 'BTC', data: this.state.data}]
      }
    });
  }

  componentDidMount() {
    $.get(`/data`, (response) => {
      this.setState({
        labels: response.labels,
        data: response.data
      }, this.buildChart);
    });
  }

  render() {
    return (
      <div>
        <h1>Cryptocurrency Charting Tool</h1>
        <canvas ref={this.myChart} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
