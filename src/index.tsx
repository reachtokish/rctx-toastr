import React from 'react';
import ReactDOM from 'react-dom';
import { INIT_TOASTR, SUCCESS_TOASTR, DESTROY_TOASTR } from './action';
import ToastrContainer from './toastrContainer';
import registerEvent from './registerEvents';

import './style.scss';

const toastr = {
  init: options => {
    const appendDomNode = document.createElement('div');
    document.body.appendChild(appendDomNode);
    ReactDOM.render(
      <ToastrContainer
        options={options}
      />,
      appendDomNode
    );

    registerEvent(INIT_TOASTR);
  },
  success: (component, options) => {
    return registerEvent(SUCCESS_TOASTR, component, options);
  },
  destroy: (id) => {
    const event = new CustomEvent(DESTROY_TOASTR, {
      detail: {
        id
      }
    });

    window.dispatchEvent(event);
  }
};

export default toastr;
