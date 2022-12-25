import React from "react";
import VtexComponent from "../components/VtexComponent";

const ComponetsSelector = () => {
  const components = ["rich-text", "slider-layout"];
  return (
    <section>
      {components.map((componentName) => {
        return (
          <div key={componentName}>
            <VtexComponent componentName={componentName} />
          </div>
        );
      })}
    </section>
  );
};

export default ComponetsSelector;
