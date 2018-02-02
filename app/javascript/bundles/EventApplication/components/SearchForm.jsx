import React from 'react';

class SearchForm extends React.Component {
  handleSearch(query) {
    fetch("/events/search?query=" + query)
      .then(response => response.json())
      .then(data => {
        this.props.handleSearch(data);
    })
  }

  render() {
    return(
      <input onChange={(e) => this.handleSearch(e.target.value)}
        type="text"
        className="form-control"
        placeholder="Type search phrase here..." />
      )
    }
  };

  export default SearchForm;