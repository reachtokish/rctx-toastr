const registerEvent = type => {
  const event = new CustomEvent(type, {
    detail: type
  });

  window.dispatchEvent(event);
};

export default registerEvent;
