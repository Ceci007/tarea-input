import React, { Component, Fragment } from 'react';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ data: event.target.value });
  }

  render() {
    return (
      <Fragment>
          <div className="container">
              <form className="text">
                <input className="text__input" type="text" 
                placeholder="Ingresa un texto" onChange={this.handleChange} />
                <button className="text__button">
                    <i className="fas fa-pencil-alt"></i>
                </button>
            </form>
            <p className="paragraph">{this.state.data}</p>
          </div>
      </Fragment>
    );
  }
}

export default App;
