import PropTypes from 'prop-types';
import React from 'react';
import EventTable from './EventTable';

class EventApplication extends React.Component {
  constructor(props) {
    super(props);

    this.state = { events: JSON.parse(props.events) }
  }

  render () {
      return(
        <div className="container">
          <div className="jumbotron">
            <h1>React on Rails Tutorial</h1>
            <p>by Darren Jensen (based on a tutorial by Piotr Jaworski)</p>
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