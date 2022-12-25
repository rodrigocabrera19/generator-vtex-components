import React from "react";
import { useVtexComponents } from "../context/VtexComponentsContext";

const JsonOutput = () => {
  const { components } = useVtexComponents();
  return components && <pre>{components}</pre>;
};

export default JsonOutput;
