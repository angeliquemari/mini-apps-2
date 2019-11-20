import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    axios.get('/events')
      .then((response) => {
        this.setState({events: response.data});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <h1>Historical Events Finder</h1>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
