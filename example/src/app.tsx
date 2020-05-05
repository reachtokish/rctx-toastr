import React from 'react';
import toastr from './../../src';

import './style.scss';

const allTemplates = [
  "Toastr is Toaster!",
  "I'm a Toastr",
  "My name is Kishore"
]

interface State {
  autoClose: number;
  position: string;
  template: string;
}

class App extends React.Component<{}, State> {
  constructor(props) {
    super(props);

    this.state = {
      autoClose: 2000,
      position: 'top-left',
      template: allTemplates[0]
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleToastr = this.handleToastr.bind(this);
  }

  componentDidMount() {
    const { autoClose, position } = this.state;

    toastr.init({
      autoClose,
      position
    });
  }

  handleToastr() {
    const { autoClose, position, template } = this.state;

    toastr.success(template, {
      autoClose,
      position
    });
  }

  handleChange(e) {
    const { value, name } = e.target;

    this.setState({
      [name]: value
    } as State);
  }

  render() {
    const { autoClose, position, template } = this.state;

    return (
      <div className="wrapper">
        <div className="inner">
          <div className="form">
            <div>
              <label>Auto close</label>
              <input
                type="number"
                name="autoClose"
                value={autoClose}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Position</label>
              <select
                name="position"
                multiple={false}
                value={position}
                onChange={this.handleChange}
              >
                <option value="top-left">Top Left</option>
                <option value="top-right">Top Right</option>
                <option value="bottom-left">Bottom Left</option>
                <option value="bottom-right">Bottom Right</option>
              </select>
            </div>
            <div>
              <label>Template</label>
              <select
                name="template"
                multiple={false}
                value={template}
                onChange={this.handleChange}
              >
                {allTemplates.map(eachTemplate => (
                  <option value={eachTemplate} key={eachTemplate}>{eachTemplate}</option>
                ))}
              </select>
            </div>
          </div>
          <button
            type="button"
            className="toastr-btn"
            onClick={this.handleToastr}
          >
            Show Toastr
          </button>
        </div>
      </div>
    );
  }
}

export default App;
