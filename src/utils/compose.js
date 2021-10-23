const compose =
  (...funcs) =>
  (component) => {
    return funcs.reduceRight((Wrapped, f) => f(Wrapped), component);
  };

export default compose;
