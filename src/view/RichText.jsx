import React, { useState } from "react";
import CreateComponentsButton from "../components/CreateComponentsButton";
import JsonOutput from "../components/JsonOutput";
import { useVtexComponents } from "../context/VtexComponentsContext";

const RichText = () => {
  const { setProps, state } = useVtexComponents();
  return (
    <div>
      <h2>Props:</h2>
      <section>
        <label>Nombre del componente:</label>
        <input
          onChange={setProps}
          type="text"
          name="name"
          value={state.name}
          placeholder="identificador del componente"
        />
      </section>
      <section>
        <label>Texto:</label>
        <textarea
          onChange={setProps}
          name="text"
          placeholder="contenido textual"
        />
      </section>
      <section>
        <label onChange={setProps}>
          Text textAlignment:
          <input type="radio" name="alignment" value="LEFT" />
          <input type="radio" name="alignment" value="CENTER" />
          <input type="radio" name="alignment" value="RIGHT" />
        </label>
      </section>
      <section>
        <label onChange={setProps}>
          Text Position:
          <input type="radio" name="position" value="LEFT" />
          <input type="radio" name="position" value="CENTER" />
          <input type="radio" name="position" value="RIGHT" />
        </label>
      </section>
      <CreateComponentsButton/>
      <JsonOutput/>
    </div>
  );
};

export default RichText;
