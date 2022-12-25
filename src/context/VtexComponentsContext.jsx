import React, {
  createContext,
  useContext,
  useReducer,
  useState,
} from "react";
import VtexComponentsReducer from "./VtexComponentsReducer";

//Creamos el contexto del componente.
const VtexComponentsContext = createContext();

//Componente que provee el contexto.
export const VtexComponentsProvider = (props) => {
  const [componentsProps, setcomponentsProps] = useState({
    props: {
      
    },
    complementos: {
      name: "",
      isChildren: false
    }
  });

  const [state, dispatch] = useReducer(VtexComponentsReducer, componentsProps);

  const setProps = (e) => {
    const type = e.target.name;
    const payload = e.target
    dispatch({
      type,
      payload,
    });
  };

  const [richText, setRichText] = useState(null);
  const creatorRichText = (propsComponents) => {
    const richText = {
      [`${propsComponents.complementos.name}#${propsComponents.complementos.name}`]: {
        props: {
          ...propsComponents.props
        },
      },
    };
    const JsonRichText = JSON.stringify(richText, null, 2);
    setRichText(JsonRichText);
  };

  return (
    <VtexComponentsContext.Provider
      value={{
        setProps,
        state,
        creatorRichText,
        richText,
      }}
      {...props}
    />
  );
};

export const useVtexComponents = () => {
  const context = useContext(VtexComponentsContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};
