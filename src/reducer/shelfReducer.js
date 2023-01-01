const shelfReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "name":
    case "showProductReference":
      return {
        ...state,
        props: {
          ...state.props,
          showProductReference: payload.checked,
        },
      };
    case "showBrandName":
      return {
        ...state,
        props: {
          ...state.props,
          showBrandName: payload.checked,
        },
      };
    case "tag":
      return {
        ...state,
        props: {
          ...state.props,
          tag: payload.value,
        },
      };
    default:
      return state;
  }
};

export default shelfReducer;
