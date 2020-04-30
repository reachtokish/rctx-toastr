import React from 'react';
import { Spring, animated, Transition } from 'react-spring/renderprops';
import { DESTROY_TOASTR } from './actions';

const a = ['green', 'blue', 'cyan', 'black'];

class ToastrComponent extends React.Component {
  componentDidMount() {
    const { index } = this.props;

    setTimeout(() => {
      const event = new CustomEvent(DESTROY_TOASTR, {
        detail: {
          index
        }
      });

      window.dispatchEvent(event);
    }, 2000);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { children } = this.props;

    return (
      <div className="toastr">
        I am a Toastr!!
        {children}
      </div>
    );
  }
}

export default ToastrComponent;
