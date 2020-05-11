import React from 'react';
import { CloseIco } from './../../icons';

import './style.scss';

function ThemeTwo() {
  return (
    <div className="toastr info">
      <button type="button" className="toastr-close"><CloseIco /></button>
      <h3 className="title">Payment Complete</h3>
      <p className="paragraph">
        Thank you for your recent payment. Your monthly subscription has been activated until June 2020.
      </p>
    </div>
  )
}

export default ThemeTwo;
