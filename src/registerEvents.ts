import { uniqueId } from './utils';
import { IOptions } from './interfaces';

const registerEvent = (type: string, component: JSX.Element = null, options: IOptions = null): string => {
  const toastId = uniqueId();

  const event = new CustomEvent(type, {
    detail: {
      component,
      options: {
        ...options,
        id: toastId
      }
    }
  });

  window.dispatchEvent(event);

  return toastId;
};

export default registerEvent;
