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

interface State {
  toastrComponents: any;
}

interface Options {
  autoClose: number;
  position: 'top-left' | 'top-right'
}

interface Props {
  options: Options
}

class ToastrContainer extends React.Component<Props, State> {
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

    window.addEventListener(SUCCESS_TOASTR, e => {
      const { toastrComponents } = { ...this.state };
      const toaster = [...toastrComponents];
      toaster.push({
        id: uniqueId(),
        component: e.detail.component,
        options: e.detail.options
      });
      this.setState(() => ({
        toastrComponents: toaster
      }));
    }, false);

    window.addEventListener(DESTROY_TOASTR, e => {
      // console.log(e.detail.index);
      const { toastrComponents } = { ...this.state };
      // const toaster = [...toastrComponents];
      this.setState(() => ({
        toastrComponents: toastrComponents.filter(el => e.detail.id !== el.id)
      }));
    }, false);
  }

  render() {
    const { toastrComponents } = this.state;
    const { options } = this.props;

    return (
      <div className="toastr-container">
        <TransitionGroup
          component={null}
        >
          {toastrComponents.map(toastrComponent => (
            <CSSTransition
              timeout={500}
              classNames="fade"
              key={toastrComponent.id}
            >
              <ToastrComponent
                options={
                  { ...options, ...toastrComponent.options }
                }
                id={toastrComponent.id}
              >
                {toastrComponent.component}
              </ToastrComponent>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    );
  }
}

export default ToastrContainer;
