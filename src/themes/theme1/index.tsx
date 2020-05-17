import React from 'react';
import { CloseIco } from './../../icons';

import './style.scss';

function ThemeOne({ options }) {
  return (
    <div className={`toastr ${options.type}`}>
      <button type="button" className="toastr-close"><CloseIco /></button>
      {options.title && <h3 className="title">{options.title}</h3>}
      {options.content && <p className="paragraph">{options.content}</p>}
    </div>
  )
}

export default ThemeOne;
