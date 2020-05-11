import React from 'react';
import { DESTROY_TOASTR } from './action';

interface Options {
  autoClose: number;
  type: string;
}

interface Props {
  children: any;
  options: Options;
  id: string;
}

class ToastrComponent extends React.Component<Props, any> {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
  }

  // componentDidMount() {
  //   const { options, id } = this.props;

  //   setTimeout(() => {
  //     const event = new CustomEvent(DESTROY_TOASTR, {
  //       detail: {
  //         id
  //       }
  //     });

  //     window.dispatchEvent(event);
  //   }, options.autoClose);
  // }

  shouldComponentUpdate() {
    return false;
  }

  handleClose() {
    const { id } = this.props;

    const event = new CustomEvent(DESTROY_TOASTR, {
      detail: {
        id
      }
    });

    window.dispatchEvent(event);
  }

  render() {
    const { children, options } = this.props;

    return (
      <div className={`toastr ${options.type}`}>
        {/* {children} &nbsp; <button onClick={this.handleClose}>X</button> */}
      </div>
    );
  }
}

export default ToastrComponent;
