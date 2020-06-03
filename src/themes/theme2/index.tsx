import React from 'react';
import { CloseIco, TickIco } from './../../icons';

import './style.scss';

function ThemeTwo({ options }) {
  return (
    <div className={`theme2 toastr ${options.type}`}>
      <button type="button" className="toastr-close"><CloseIco /></button>
      <span className="toastr-sign"><TickIco /></span>
      {options.title && <h3 className="title">{options.title}</h3>}
      {options.content && <p className="paragraph">{options.content}</p>}
    </div>
  );
}

export default ThemeTwo;
