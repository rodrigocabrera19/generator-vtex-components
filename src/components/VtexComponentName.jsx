import React from "react";
import { useVtexComponents } from "../context/VtexComponentsContext";

const VtexComponentName = ({ componentName }) => {
  const { selectedComponentDispatch, setComponents } = useVtexComponents();

  const handlerSelector = (e) => {
    const typeComponent = e.target.value;
    selectedComponentDispatch({
      type: typeComponent,
      payload: typeComponent
    });

    setComponents(null)
  }
  return (
    <div>
      <label htmlFor="components">
        <input type="radio" name="components" id="" value={componentName} onChange={handlerSelector}/>
        {componentName}
      </label>
    </div>
  );
};

export default VtexComponentName;
