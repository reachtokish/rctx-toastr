const registerEvent = (type, component = null, options = null) => {
  const event = new CustomEvent(type, {
    detail: {
      component,
      options
    }
  });

  window.dispatchEvent(event);
};

export default registerEvent;
