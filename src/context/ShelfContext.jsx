import React, { createContext, useContext, useReducer, useState } from "react";
import shelfReducer from "../reducer/shelfReducer";
import { useVtexComponents } from "./VtexComponentsContext";

//Creamos el contexto del componente.
const ShelfContext = createContext();

/* Provedor de states */
export const ShelfProvider = (props) => {
  const { initialState } = useVtexComponents();
  const [shelfChildren, setShelfChildren] = useState([]);

  const [shelfState, shelfDispatch] = useReducer(shelfReducer, initialState);

  const selectChildren = (e) => {
    const childrenComponent = e.target.name;
    if (!shelfChildren.includes(childrenComponent)) {
      setShelfChildren([...shelfChildren, childrenComponent]);
    } else {
      setShelfChildren(shelfChildren.filter((c) => c !== childrenComponent));
    }
  };

  const setProps = (e) => {
    const type = e.target.name;
    const payload = e.target;
    shelfDispatch({
      type,
      payload,
    });
  };

  const [components, setComponents] = useState(null);
  const createComponents = (name) => {
    const componentProductSummary = shelfChildren.reduce((acc, curr) => {
      return {
        ...acc,
        [`product-summary-shelf#${name}`]: {
          children: shelfChildren,
        },
        [`${curr}#${name}`]: {
          props: {
            ...shelfState.props,
          },
        },
      };
    }, {});

    const JsonProductSummaryShelf = JSON.stringify(
      componentProductSummary,
      null,
      2
    );
    setComponents(JsonProductSummaryShelf);
  };
  return (
    <ShelfContext.Provider
      value={{
        createComponents,
        components,
        selectChildren,
        shelfChildren,
        setProps,
      }}
      {...props}
    />
  );
};
export const useShelf = () => {
  const context = useContext(ShelfContext);
  if (!context) {
    throw new Error("Error en el context");
  }
  return context;
};
