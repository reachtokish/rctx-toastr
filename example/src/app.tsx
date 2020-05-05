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
  templates: string;
}

class App extends React.Component<{}, State> {
  constructor(props) {
    super(props);

    this.state = {
      autoClose: 2000,
      position: 'top-left',
      templates: allTemplates[0]
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleToastr = this.handleToastr.bind(this);
  }

  componentDidMount() {
    const { autoClose, position, templates } = this.state;

    toastr.init({
      autoClose,
      position
    });
  }

  handleToastr() {
    const { autoClose, position, templates } = this.state;

    toastr.success(templates, {
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
    const { autoClose, position, templates } = this.state;

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
                name="templates"
                multiple={false}
                value={templates}
                onChange={this.handleChange}
              >
                {allTemplates.map(template => (
                  <option value={template} key={template}>{template}</option>
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
