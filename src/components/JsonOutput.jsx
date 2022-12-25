import React from "react";
import { useVtexComponents } from "../context/VtexComponentsContext";

const JsonOutput = () => {
  const { richText } = useVtexComponents();
  return richText && <pre>{richText}</pre>;
};

export default JsonOutput;
