import React, { useState } from "react";
import CreateComponentsButton from "../components/CreateComponentsButton";
import JsonOutput from "../components/JsonOutput";
import { ShelfProvider, useShelf } from "../context/ShelfContext";

export default () => {
  return (
    <ShelfProvider>
      <ProductSummaryShelf />
    </ShelfProvider>
  );
};
const ProductSummaryShelf = () => {
  const { selectChildren, createComponents, components } = useShelf();

  const [productSummaryShelfName, setProductSummaryShelfName] = useState("");
  return (
    <div>
      <section>
        <label htmlFor="produt-summary-shelf">
          {" "}
          Identificador del Product summary shelf
          <input
            type="text"
            name="produt-summary-shelf"
            id=""
            value={productSummaryShelfName}
            onChange={(e) => setProductSummaryShelfName(e.target.value)}
          />
        </label>
      </section>
      <section>
        <label htmlFor="product-summary-name">
          product-summary-name
          <input
            type="checkbox"
            name="product-summary-name"
            id=""
            onChange={selectChildren}
          />
        </label>
        <label htmlFor="product-summary-name">
          product-summary-description
          <input
            type="checkbox"
            name="product-summary-description"
            id=""
            onChange={selectChildren}
          />
        </label>
      </section>
      <CreateComponentsButton
        createComponents={createComponents}
        productSummaryShelfName={productSummaryShelfName}
      />
      <JsonOutput components={components} />
    </div>
  );
};
