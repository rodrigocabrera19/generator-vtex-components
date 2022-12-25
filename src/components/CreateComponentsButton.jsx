import React, { useMemo, useState } from "react";
import { useVtexComponents } from "../context/VtexComponentsContext";
import RichText from "../view/RichText";

const CreateComponentsButton = () => {
  const { state, creatorRichText } = useVtexComponents();

  return (
    <div>
      <button onClick={() => creatorRichText(state)}>Generator json</button>
    </div>
  );
};
export default CreateComponentsButton;
