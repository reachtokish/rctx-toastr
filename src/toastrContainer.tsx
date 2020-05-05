import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import ToastrComponent from './toastr';
import { INIT_TOASTR, SUCCESS_TOASTR, DESTROY_TOASTR } from './action';
import update from 'react-addons-update';
import { uniqueId } from './utils';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import { IOptions } from './interfaces';

interface State {
  toastRails: object;
}

interface Props {
  options: IOptions
}

class ToastrContainer extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      toastRails: {}
    };
  }

  updateToastRails(component, options) {
    const { toastRails } = this.state;
    const { position } = options;

    if (toastRails[position]) {
      toastRails[position].push({
        id: uniqueId(),
        component,
        options
      });

      this.setState({
        toastRails
      }, () => {
        console.log(toastRails);
      })
    }
    else {
      toastRails[position] = [{
        id: uniqueId(),
        component,
        options
      }];

      this.setState({
        toastRails
      }, () => {
        console.log(toastRails);
      });
    }
  }

  componentDidMount() {
    window.addEventListener(INIT_TOASTR, event => {
      return null;
    }, false);

    window.addEventListener(SUCCESS_TOASTR, event => {
      const { component, options } = event.detail;
      this.updateToastRails(component, options);
    }, false);

    window.addEventListener(DESTROY_TOASTR, event => {
      return null;
    }, false);
  }

  render() {
    const { toastRails } = this.state;

    return (
      <>
        {Object.keys(toastRails).map(toastRail => (
          <div className={`toastr-container ${toastRail}`} key={toastRail}>
            {toastRails[toastRail].map(({ id, component, options }) => (
              <ToastrComponent
                options={options}
                id={id}
                key={id}
              >
                {component}
              </ToastrComponent>
            ))}
          </div>
        ))}
      </>
    );
  }
}

export default ToastrContainer;
