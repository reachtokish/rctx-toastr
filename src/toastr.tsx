import React from 'react';
import { DESTROY_TOASTR } from './action';
import ThemeOne from './themes/theme1';

interface Options {
  autoClose: number;
  type: string;
}

interface Props {
  children: any;
  options: Options;
  id: string;
}

class ToastrComponent extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
  }

  shouldComponentUpdate(): boolean {
    return false;
  }

  handleClose(): void {
    const { id } = this.props;

    const event = new CustomEvent(DESTROY_TOASTR, {
      detail: {
        id
      }
    });

    window.dispatchEvent(event);
  }

  render(): JSX.Element {
    const { children, options } = this.props;

    return (
      <ThemeOne
        options={{ ...options }}
      />
    );
  }
}

export default ToastrComponent;
