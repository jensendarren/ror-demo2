import PropTypes from 'prop-types';
import React from 'react';

class Event extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    event_date: PropTypes.string,
    place: PropTypes.string,
    description: PropTypes.string,
  };

  render() {
    var event = this.props.event;
    return(
        <tr>
            <td>{event.name}</td>
            <td>{event.event_date}</td>
            <td>{event.place}</td>
            <td>{event.description}</td>
        </tr>
    )
  }
};

export default Event;