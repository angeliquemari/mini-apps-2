import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './Search.jsx';
import Results from './Results.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWords: undefined,
      pageNumber: undefined,
      pageCount: undefined,
      searchResults: []
    };
    this.searchEvents = this.searchEvents.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  getEvents(searchWords, pageNumber) {
    axios.get(`/events?q=${searchWords}&_page=${pageNumber}`)
      . then((response) => {
        let pageLinks = response.headers.link.split(', ');
        let lastPageLink = pageLinks[pageLinks.length -1];
        let lastPageNumber = Number(lastPageLink.match(/&_page=\d+>/)[0].match(/\d+/)[0]);
        this.setState({pageCount: lastPageNumber, searchResults: response.data});
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  }

  searchEvents() {
    let searchWords = document.getElementById('search-input').value;
    this.setState({
      searchWords: searchWords,
      pageNumber: 1
    }, () => {
      this.getEvents(this.state.searchWords, this.state.pageNumber)
    });
  }

  changePage(data) {
    let pageNumber = data.selected + 1;
    this.setState({
      pageNumber: pageNumber
    }, () => {
      this.getEvents(this.state.searchWords, this.state.pageNumber)
    });
  }

  render() {
    return (
      <div>
        <h1>Historical Events Finder</h1>
        <Search searchEvents={this.searchEvents} />
        <Results searchResults={this.state.searchResults} pageCount={this.state.pageCount} changePage={this.changePage} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
