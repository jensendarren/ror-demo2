import PropTypes from 'prop-types';
import React from 'react';
import EventTable from './EventTable';

class EventApplication extends React.Component {
  constructor(props) {
    super(props);

    //props are loaded as an object so need to convert to Arry
    var props_array = Object.keys(props).map(function (key) { return props[key]; });

    this.state = { events: props_array }
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