import React from 'react';
import ReactDom from 'react-dom';
import ToastrComponent from './toastr';
import { INIT_TOASTR, SUCCESS_TOASTR, DESTROY_TOASTR } from './action';
import update from 'react-addons-update';
import { uniqueId } from './utils';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { IOptions } from './interfaces';
import ThemeTwo from './themes/theme2';

interface State {
  toastRails: object;
}

interface Props {
  options: IOptions;
}

class ToastrContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      toastRails: {}
    };
  }

  updateToastRails(component: JSX.Element, options: IOptions): void {
    const { toastRails } = this.state;
    const { position, id } = options;

    if (toastRails[position]) {
      toastRails[position].push({
        id,
        component,
        options
      });

      this.setState({
        toastRails
      });
    }
    else {
      toastRails[position] = [{
        id,
        component,
        options
      }];

      this.setState({
        toastRails
      });
    }
  }

  destroyToastr({ id }: { id: string }): void {
    const { toastRails } = this.state;
    const newObj = {};

    Object.keys(toastRails)
      // TODO: need to check typedef in the below line
      .map((el: any): any => {
        // TODO: need to check typedef in the below line
        const mapped = toastRails[el].filter((elm: any): any => elm.id !== id);
        newObj[el] = mapped;
        return el;
      });

    this.setState({
      toastRails: newObj
    });
  }

  componentDidMount(): void {
    // TODO: need to check typedef in the below line
    window.addEventListener(INIT_TOASTR, (event: any): any => {
      return null;
    }, false);

    // TODO: need to check typedef in the below line
    window.addEventListener(SUCCESS_TOASTR, (event: any): any => {
      const { component, options } = event.detail;
      this.updateToastRails(component, options);

      if (options.autoClose) {
        // TODO: need to check typedef in the below line
        setTimeout((): any => {
          this.destroyToastr(options);
        }, options.autoClose);
      }
    }, false);

    // TODO: need to check typedef in the below line
    window.addEventListener(DESTROY_TOASTR, (event: any): any => {
      this.destroyToastr(event.detail);
    }, false);
  }

  render(): JSX.Element {
    const { toastRails } = this.state;

    return (
      <>
        {/* TODO: need to check typedef in the below line */}
        {Object.keys(toastRails).map((toastRail: any): any => (
          <div className={`toastr-container ${toastRail}`} key={toastRail}>
            {/* TODO: need to check typedef in the below line */}
            {toastRails[toastRail] && toastRails[toastRail]
              .map(({ id, component, options }: any): any => (
                <ToastrComponent
                  options={options}
                  id={id}
                  key={id}
                >
                  {component}
                </ToastrComponent>
              ))}
          </div>
        ))}
      </>
    );
  }
}

export default ToastrContainer;
