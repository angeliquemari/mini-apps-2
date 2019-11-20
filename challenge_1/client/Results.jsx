import React from 'react';

export default function Results({searchResults}) {
  return (
    <div>
      <h2>Search Results</h2>
      {searchResults.map((event, index) => {
        return (
          <div key={index}>{event.date}: {event.description}</div>
        );
      })}
    </div>
  );
};
