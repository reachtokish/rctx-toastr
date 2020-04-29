import React from 'react';
import ReactDOM from 'react-dom';
import { INIT_TOASTR, SUCCESS_TOASTR, DESTROY_TOASTR } from './actions';
import ToastrContainer from './toastrContainer';

import './style.scss';

const toastr = {
  init: () => {
    const appendDomNode = document.createElement('div');
    document.body.appendChild(appendDomNode);
    ReactDOM.render(
      <ToastrContainer />,
      appendDomNode
    );
    const event = new CustomEvent(INIT_TOASTR, {
      detail: 'INIT'
    });

    window.dispatchEvent(event);
  },
  success: () => {
    const event = new CustomEvent(SUCCESS_TOASTR, {
      detail: 'SUCCESS'
    });

    window.dispatchEvent(event);
  },
  destroy: () => {
    const event = new CustomEvent(DESTROY_TOASTR, {
      detail: 'DESTROY'
    });

    window.dispatchEvent(event);
  }
};

export default toastr;
