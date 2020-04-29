import React from 'react';
import { Spring } from 'react-spring/renderprops';
import { DESTROY_TOASTR } from './actions';

class ToastrComponent extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const event = new CustomEvent(DESTROY_TOASTR, {
        detail: 'DESTROY'
      });

      window.dispatchEvent(event);
    }, 2000);
  }

  render() {
    const { children } = this.props;
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {props => (
          <div style={props} className="toastr">
            I am a Toastr!!
            {children}
          </div>
        )}
      </Spring>
    );
  }
}

export default ToastrComponent;
