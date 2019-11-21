import React from 'react';
import ReactPaginate from 'react-paginate';

export default function Results({searchResults, pageCount, changePage}) {
  return (
    <div>
      <h2>Search Results</h2>
      {searchResults.map((event, index) => {
        return (
          <div key={index}>{event.date}: {event.description}</div>
        );
      })}
      {searchResults.length > 0 && <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        previousLabel={'Previous'}
        nextLabel={'Next'}
        onPageChange={changePage}
      />}
    </div>
  );
};
