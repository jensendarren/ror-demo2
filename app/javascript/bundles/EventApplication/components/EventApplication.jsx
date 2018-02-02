import PropTypes from 'prop-types';
import React from 'react';
import EventTable from './EventTable';
import SearchForm from './SearchForm';

class EventApplication extends React.Component {
  constructor(props) {
    super(props);

    this.state = { events: JSON.parse(props.events) }
  }

  handleSearch(events) {
    this.setState({ events: events });
  }
  
  render () {
      return(
        <div className="container">
          <div className="jumbotron">
            <h1>React on Rails Tutorial</h1>
            <p>by Darren Jensen (based on a tutorial by Piotr Jaworski)</p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <SearchForm handleSearch={this.handleSearch.bind(this)} /> 
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <EventTable events={this.state.events}/>
            </div>
          </div>
        </div>
      )
    }
  };

export default EventApplication;