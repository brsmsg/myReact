function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children,
    },
    a: 123,
  };
}

export default createElement;
