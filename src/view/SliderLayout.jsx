import React, { useState } from "react";
import CreateComponentsButton from "../components/CreateComponentsButton";
import JsonOutput from "../components/JsonOutput";
import { useVtexComponents } from "../context/VtexComponentsContext";

const Sliderlayout = () => {
  const { setProps, state, createComponents, components } = useVtexComponents();
  return (
    <div>
      <h2>Props:</h2>
      <section>
        <label>Nombre del componente:</label>
        <input
          onChange={setProps}
          type="text"
          name="name"
          value={state?.complementos.name}
          placeholder="identificador del componente"
        />
      </section>
      <section>
        <label>itemsPerPage:</label>
        <input
          onChange={setProps}
          type="number"
          name="itemsDesktop" /* 
          value={props.itemsPerPage.desktop} */
        />
        Desktop
        <input
          onChange={setProps}
          type="number"
          name="itemsTablet" /* 
          value={props.itemsPerPage.tablet} */
        />
        Tablet
        <input
          onChange={setProps}
          type="number"
          name="itemsPhone" /* 
          value={props.itemsPerPage.phone} */
        />
        Phone
      </section>
      <section>
        <label onChange={setProps} htmlFor="infinite">
          infinite:
          <input type="radio" name="infinite" value="true" />
          Si
          <input type="radio" name="infinite" value="false" />
          No
        </label>
      </section>
      <section>
        <label onChange={setProps} htmlFor="showNavigationArrows">
          showNavigationArrows:
          <input type="radio" name="showNavigationArrows" value="always" />
          <input type="radio" name="showNavigationArrows" value="never" />
          <input type="radio" name="showNavigationArrows" value="mobileOnly" />
          <input type="radio" name="showNavigationArrows" value="desktopOnly" />
        </label>
      </section>
      <section>
        <label htmlFor="isChildren">
          Children?:
          <input
            type="checkbox"
            onChange={setProps}
            name="isChildren"
            value={state.complementos?.isChildren}
          />
        </label>
      </section>
      <CreateComponentsButton createComponents={createComponents} />
      <JsonOutput components={components} />
    </div>
  );
};

export default Sliderlayout;
