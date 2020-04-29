import React from 'react';
import ToastrComponent from './toastr';
import { INIT_TOASTR, SUCCESS_TOASTR, DESTROY_TOASTR } from './actions';

class ToastrContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toastrComponents: []
    };
  }

  componentDidMount() {
    window.addEventListener(INIT_TOASTR, e => {
      console.log(e);
    }, false);

    window.addEventListener(SUCCESS_TOASTR, () => {
      const { toastrComponents } = this.state;
      const toaster = [...toastrComponents];
      toaster.unshift({
        id: new Date().getTime()
      });
      this.setState({
        toastrComponents: toaster
      });
    }, false);

    window.addEventListener(DESTROY_TOASTR, () => {
      const { toastrComponents } = this.state;
      const toaster = [...toastrComponents];
      toaster.pop();
      this.setState({
        toastrComponents: toaster
      });
    }, false);
  }

  render() {
    const { toastrComponents } = this.state;

    return (
      <div className="toastr-container">
        {toastrComponents
          .map((toastrComponent, index) => <ToastrComponent key={index}>{index}</ToastrComponent>)}
      </div>
    );
  }
}

export default ToastrContainer;
