import React from "react";
import VtexComponentName from "../components/VtexComponentName";

const ComponetsSelector = () => {
  const components = ["rich-text", "slider-layout"];
  return (
    <section>
      {components.map((componentName) => {
        return (
          <div key={componentName}>
            <VtexComponentName componentName={componentName} />
          </div>
        );
      })}
    </section>
  );
};

export default ComponetsSelector;
