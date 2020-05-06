import { uniqueId } from './utils';

const registerEvent = (type, component = null, options = null) => {
  const event = new CustomEvent(type, {
    detail: {
      component,
      options: {
        ...options,
        id: uniqueId()
      }
    }
  });

  window.dispatchEvent(event);
};

export default registerEvent;
