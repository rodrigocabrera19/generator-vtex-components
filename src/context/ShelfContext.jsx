import React, { createContext, useContext, useState } from "react";

//Creamos el contexto del componente.
const ShelfContext = createContext();
export const ShelfProvider = (props) => {
  const initialState = {
    "product-summary-name": "",
    "product-summary-description": "",
  };
  const [shelfChildren, setShelfChildren] = useState([]);

  // const [shelfState, shelfDispatch] = useReducer(ShelfReducer, initialState);

  const selectChildren = (e) => {
    const childrenComponent = e.target.name;
    setShelfChildren([...shelfChildren, childrenComponent]);
  };

  const [components, setComponents] = useState(null);
  const createComponents = (name) => {
    const componentProductSummary = {
      [`product-summary-shelf#${name}`]: {
        children: shelfChildren,
      },
    };
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
        selectChildren
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
