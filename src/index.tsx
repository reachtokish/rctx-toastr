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
      <ToastrContainer {...options} />,
      appendDomNode
    );

    registerEvent(INIT_TOASTR);
  },
  success: () => {
    registerEvent(SUCCESS_TOASTR);
  },
  destroy: () => {
    registerEvent(DESTROY_TOASTR);
  }
};

export default toastr;
