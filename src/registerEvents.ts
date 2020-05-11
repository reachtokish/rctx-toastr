import { uniqueId } from './utils';

const registerEvent = (type, component = null, options = null) => {
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
