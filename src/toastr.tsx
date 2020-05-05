import React from 'react';
import { DESTROY_TOASTR } from './action';

interface Options {
  autoClose: number;
}

interface Props {
  children: any;
  options: Options;
  id: string;
}

class ToastrComponent extends React.Component<Props, any> {
  componentDidMount() {
    const { options, id } = this.props;

    setTimeout(() => {
      const event = new CustomEvent(DESTROY_TOASTR, {
        detail: {
          id
        }
      });

      window.dispatchEvent(event);
    }, options.autoClose);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { children } = this.props;

    return (
      <div className="toastr">
        {children}
      </div>
    );
  }
}

export default ToastrComponent;
