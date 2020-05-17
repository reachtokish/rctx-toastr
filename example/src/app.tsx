import React from 'react';
import toastr from './../../src';

import './style.scss';

const allTemplates = [
  "Toastr is Toaster!",
  "I'm a Toastr",
  "My name is Kishore"
]

interface State {
  autoClose: number | string | boolean;
  position: string;
  template: string;
  type: string;
}

class App extends React.Component<{}, State> {
  toastrId: string;

  constructor(props) {
    super(props);

    this.state = {
      autoClose: 2000,
      position: 'top-left',
      template: allTemplates[0],
      type: 'default'
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleToastr = this.handleToastr.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);
  }

  componentDidMount() {
    const { autoClose, position, type } = this.state;

    toastr.init({
      autoClose,
      position,
      type
    });
  }

  handleToastr() {
    const { autoClose, position, template, type } = this.state;

    this.toastrId = toastr.success(template, {
      autoClose: autoClose === 'false' ? false : autoClose,
      position,
      type,
      title: "Payment Complete!!",
      content: "Thank you for your recent payment. Your monthly subscription has been activated until June 2020."
    });
  }

  handleChange(e) {
    const { value, name } = e.target;

    this.setState({
      [name]: name === 'autoClose' ? value === 'false' ? 'false' : parseInt(value) : value
    } as State);
  }

  handleDestroy() {
    toastr.destroy(this.toastrId)
  }

  render() {
    const { autoClose, position, template, type } = this.state;

    return (
      <div className="wrapper">
        <div className="inner">
          <div className="form">
            <div>
              <label>Auto close</label>
              <select
                multiple={false}
                name="autoClose"
                value={autoClose}
                onChange={this.handleChange}
              >
                <option value={2000}>2000</option>
                <option value={5000}>5000</option>
                <option value={10000}>10000</option>
                <option value="false">false</option>
              </select>
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
                <option value="top-center">Top Center</option>
                <option value="bottom-center">Bottom Center</option>
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
            <div>
              <label>Type</label>
              <select
                name="type"
                multiple={false}
                value={type}
                onChange={this.handleChange}
              >
                <option value="default">Default</option>
                <option value="info">Info</option>
                <option value="success">Success</option>
                <option value="warning">Warning</option>
                <option value="error">Error</option>
              </select>
            </div>
          </div>
          <button
            type="button"
            className="toastr-btn"
            onClick={this.handleDestroy}
          >
            Destroy Message
          </button>
          <button
            type="button"
            className="toastr-btn"
            onClick={this.handleToastr}
          >
            Flash Message
          </button>
        </div>
      </div>
    );
  }
}

export default App;
