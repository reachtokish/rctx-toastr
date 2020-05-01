import React from 'react';
import { DESTROY_TOASTR } from './action';

interface Props {
  index: number;
  children: any;
}

class ToastrComponent extends React.Component<Props, any> {
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
