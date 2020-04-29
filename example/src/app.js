import React from 'react';
import toastr from '../../src';

import './style.scss';

class App extends React.Component {
  componentDidMount() {
    toastr.init();
  }

  handleToastr() {
    toastr.success();
  }

  render() {
    return (
      <div className="wrapper">
        <button
          type="button"
          className="toastr-btn"
          onClick={this.handleToastr}
        >
          Show Toastr
        </button>
      </div>
    );
  }
}

export default App;
