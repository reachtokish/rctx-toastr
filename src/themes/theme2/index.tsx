import React from 'react';
import { CloseIco, TickIco } from './../../icons';

import './style.scss';

function ThemeTwo() {
  return (
    <div className="toastr success">
      <button type="button" className="toastr-close"><CloseIco /></button>
      <span className="toastr-sign"><TickIco /></span>
      <h3 className="title">Payment Complete</h3>
      <p className="paragraph">
        Your monthly subscription has been activated.
      </p>
    </div>
  )
}

export default ThemeTwo;
