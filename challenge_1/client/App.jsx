import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './Search.jsx';
import Results from './Results.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      searchResults: [{"date": "-300", "description": "Pilgrims travel to the healing temples of Asclepieion to be cured of their ills. After a ritual purification the followers bring offerings or sacrifices.", "lang": "en", "category1": "By place", "category2": "Greece", "granularity": "year"}, 
      {"date": "-300", "description": "Pyrrhus, the King of Epirus, is taken as a hostage to Egypt after the Battle of Ipsus and makes a diplomatic marriage with the princess Antigone, daughter of Ptolemy and Berenice.", "lang": "en", "category1": "By place", "category2": "Egypt", "granularity": "year"}, 
      {"date": "-300", "description": "Ptolemy concludes an alliance with King Lysimachus of Thrace and gives him his daughter Arsinoe II in marriage.", "lang": "en", "category1": "By place", "category2": "Egypt", "granularity": "year"}]
    };
    this.searchEvents = this.searchEvents.bind(this);
  }

  searchEvents() {
    console.log('search input:', document.getElementById('search-input').value);
    // get events from server, update results on state
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
      <div>
        <h1>Historical Events Finder</h1>
        <Search searchEvents={this.searchEvents} />
        <Results searchResults={this.state.searchResults} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
