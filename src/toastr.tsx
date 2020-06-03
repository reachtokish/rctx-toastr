import React from 'react';
import { DESTROY_TOASTR } from './action';
import { ThemeOne, ThemeTwo } from './themes';

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

  renderTheme() {
    const { options } = this.props;

    switch (options.theme) {
      case 'THEME_ONE':
        return (
          <ThemeOne
            options={{ ...options }}
          />
        )
      case 'THEME_TWO':
        return (
          <ThemeTwo
            options={{ ...options }}
          />
        );
      default:
        return (
          <ThemeOne
            options={{ ...options }}
          />
        );
    }
  }

  render(): JSX.Element {
    const { children, options } = this.props;

    return (
      <>
        {this.renderTheme()}
      </>
    );
  }
}

export default ToastrComponent;
