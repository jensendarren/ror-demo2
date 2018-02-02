import PropTypes from 'prop-types';
import React from 'react';

class NewForm extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        event_date: PropTypes.string,
        place: PropTypes.string,
        description: PropTypes.string
      }

      constructor(props) {
        super(props);
    
        this.state = {
          name: '',
          place: '',
          event_date: '',
          description: ''
        };
      }

      handleAdd(e) {
        e.preventDefault();
        if (this.validForm()) {
          fetch('/events', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ event: this.state })
            })
            .then(response => response.json())
            .then(data => {
              this.props.handleAdd(data);
              this.setState(this.getInitialState());
            })
        } else {
          alert('Please fill all fields.');
        }
      }

      validForm() {
        if (this.state.name && this.state.place &&
            this.state.event_date && this.state.description) {
          return true;
        } else {
          return false;
        }
      }

      handleChange(e) {
        var input_name = e.target.name;
        var value = e.target.value;
        this.setState({ [input_name] : value });
      }

      render() {
        return(
          <form className="form-inline" onSubmit={this.handleAdd.bind(this)}>
            <div className="form-group">
              <input type="text"
                     className="form-control"
                     name="name"
                     placeholder="Name"
                     value={this.state.name}
                     onChange={this.handleChange.bind(this)} />
            </div>
            <div className="form-group">
              <input type="text"
                     className="form-control"
                     name="place"
                     placeholder="Place"
                     value={this.state.place}
                     onChange={this.handleChange.bind(this)} />
            </div>
            <div className="form-group">
              <input type="date"
                     className="form-control"
                     name="event_date"
                     placeholder="Event date"
                     value={this.state.event_date}
                     onChange={this.handleChange.bind(this)} />
            </div>
            <div className="form-group">
              <input type="text"
                     className="form-control"
                     name="description"
                     placeholder="Description"
                     value={this.state.description}
                     onChange={this.handleChange.bind(this)} />
            </div>
            <button type="submit" className="btn btn-primary">Add</button>
          </form>
        )
      }
    };

    export default NewForm;