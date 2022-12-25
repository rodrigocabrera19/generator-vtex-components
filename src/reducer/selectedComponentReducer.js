const selectedComponentReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "rich-text":
      return payload;
    case "slider-layout":
      return payload;

    default:
      return state;
  }
};

export default selectedComponentReducer;
