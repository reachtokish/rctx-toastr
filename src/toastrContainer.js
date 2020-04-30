import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import ToastrComponent from './toastr';
import { INIT_TOASTR, SUCCESS_TOASTR, DESTROY_TOASTR } from './actions';
import update from 'react-addons-update';

const rand = Math.random(1, 100);

class ToastrContainer extends React.Component {
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
    window.addEventListener(INIT_TOASTR, e => {
      console.log(e);
    }, false);

    window.addEventListener(SUCCESS_TOASTR, () => {
      const { toastrComponents } = { ...this.state };
      const toaster = [...toastrComponents];
      toaster.push(<ToastrComponent />);
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
          .map((toastrComponent, index) => <ToastrComponent key={index}>{rand}</ToastrComponent>)}
      </div>
    );
  }
}

export default ToastrContainer;
