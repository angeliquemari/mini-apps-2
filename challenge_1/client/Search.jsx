import React from 'react';

export default function Search({searchEvents}) {
  return (
    <div>
      <input id='search-input'></input>
      <button onClick={searchEvents}>Search Events</button>
    </div>
  );
};
