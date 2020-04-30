import React from 'react';
import { Spring } from 'react-spring/renderprops';
import { DESTROY_TOASTR } from './actions';

const a = ['green', 'blue', 'cyan', 'black'];

class ToastrComponent extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="toastr" style={{ backgroundColor: a[Math.floor(a.length * Math.random())] }}>
        I am a Toastr!!
      </div>
    );
  }
}

export default ToastrComponent;
