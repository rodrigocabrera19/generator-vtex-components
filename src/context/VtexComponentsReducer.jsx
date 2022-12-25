import React from "react";

const VtexComponentsReducer = (state, action) => {
  const { type, payload } = action;
  console.log(payload.checked);
  switch (type) {
    case "name":
      return {
        ...state,
        complementos: {
          ...state.complementos,
          name: payload.value,
        },
      };
    case "text":
      return {
        ...state,
        props: {
          ...state.props,
          text: payload.value,
        },
      };
    case "alignment":
      return {
        ...state,
        props: {
          ...state.props,
          textAlignment: payload.value,
        },
      };
    case "position":
      return {
        ...state,
        props: {
          ...state.props,
          textPosition: payload.value,
        },
      };
    case "itemsDesktop":
      return {
        ...state,
        props: {
          itemsPerPage: {
            ...state?.props?.itemsPerPage,
            desktop: payload.value,
          },
        },
      };
    case "itemsTablet":
      return {
        ...state,
        props: {
          itemsPerPage: {
            ...state?.props?.itemsPerPage,
            tablet: payload.value,
          },
        },
      };
    case "itemsPhone":
      return {
        ...state,
        props: {
          itemsPerPage: {
            ...state?.props?.itemsPerPage,
            phone: payload.value,
          },
        },
      };
    case "infinite":
      return {
        ...state,
        props: {
          ...state.props,
          infinite: payload.value,
        },
      };
    case "showNavigationArrows":
      return {
        ...state,
        props: {
          ...state.props,
          showNavigationArrows: payload.value,
        },
      };
    case "isChildren":
      return {
        ...state,
        complementos: {
          ...state.complementos.isChildren,
          isChildren: payload.checked,
        },
      };
    default:
      return state;
  }
};

export default VtexComponentsReducer;
