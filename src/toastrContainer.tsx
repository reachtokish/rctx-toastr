import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import ToastrComponent from './toastr';
import { INIT_TOASTR, SUCCESS_TOASTR, DESTROY_TOASTR } from './action';
import update from 'react-addons-update';

let num = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

interface State {
  toastrComponents: any;
}

class ToastrContainer extends React.Component<any, State> {
  static propTypes = {
    autoClose: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.bool
    ])
  };

  constructor(props) {
    super(props);
    this.state = {
      toastrComponents: []
    };
  }

  componentDidMount() {
    // window.addEventListener(INIT_TOASTR, e => {
    // }, false);

    window.addEventListener(SUCCESS_TOASTR, () => {
      const { toastrComponents } = { ...this.state };
      const toaster = [...toastrComponents];
      toaster.push(num);
      num += 1;
      this.setState(() => ({
        toastrComponents: toaster
      }));
    }, false);

    window.addEventListener(DESTROY_TOASTR, e => {
      // console.log(e.detail.index);
      const { toastrComponents } = { ...this.state };
      const toaster = [...toastrComponents];
      this.setState(() => ({
        toastrComponents: update(toaster, { $splice: [[0, 1]] })
      }));
    }, false);
  }

  render() {
    const { toastrComponents } = this.state;

    return (
      <div className="toastr-container">
        {toastrComponents.map((toastrComponent, index) => (
          <ToastrComponent key={toastrComponent} index={index}>{toastrComponent}</ToastrComponent>)
        )}
      </div>
    );
  }
}

export default ToastrContainer;
