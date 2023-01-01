import React, {
  createContext,
  useContext,
  useReducer,
  useState,
} from "react";
import selectedComponentReducer from "../reducer/selectedComponentReducer";
import vtexComponentsReducer from "../reducer/vtexComponentsReducer";

//Creamos el contexto del componente.
const VtexComponentsContext = createContext();

//Componente que provee el contexto.
export const VtexComponentsProvider = (props) => {

  //Estado incial del selector de componentes a crear
  const selectedComponent = '';
  const [stateSelectedComponent, selectedComponentDispatch] = useReducer(selectedComponentReducer, selectedComponent);

  //Estado inicial de las propiedades y complementos de los componentes
  const initialState = {
    props: {
      
    },
    complementos: {
      name: "",
      isChildren: false,
      isBlocks: false
    }
  };
  //Reduce para las propiedades del components
  const [state, dispatch] = useReducer(vtexComponentsReducer, initialState);

  const setProps = (e) => {
    const type = e.target.name;
    const payload = e.target
    dispatch({
      type,
      payload,
    });
  };

  const [components, setComponents] = useState(null);
  const createComponents = () => {
    const { name, isChildren } = state.complementos;
    const components = {
      [`${stateSelectedComponent}#${name}`]: {
        props: {
          ...state.props
        },
      },
    };

    if(isChildren) {
      components.children = []
    }
    const JsonComponents = JSON.stringify(components, null, 2);
    setComponents(JsonComponents);
  };
  return (
    <VtexComponentsContext.Provider
      value={{
        setProps,
        state,
        createComponents,
        components,
        setComponents,
        stateSelectedComponent,
        selectedComponentDispatch
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
