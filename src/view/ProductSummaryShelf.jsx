import React, { useState } from "react";
import CreateComponentsButton from "../components/CreateComponentsButton";
import JsonOutput from "../components/JsonOutput";
import { ShelfProvider, useShelf } from "../context/ShelfContext";
import ProductSummaryName from "./ProductSummaryName";

export default () => {
  return (
    <ShelfProvider>
      <ProductSummaryShelf />
    </ShelfProvider>
  );
};
const ProductSummaryShelf = () => {
  const { selectChildren, createComponents, components, shelfChildren } =
    useShelf();
  const [productSummaryShelfName, setProductSummaryShelfName] = useState("");

  /* CHILDRENS COMPONENTS ELEGIDOS PARA INCLUIR EN EL PRODUCT-SUMMARY-SHELF */
  const [childrensSelected, setChildrenSelected] = useState([]);

  const selecteChildren = () => {};
  return (
    <div>
      <section>
        <label htmlFor="produt-summary-shelf">
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

      {/* CHILDREN COMPONENTS A ELEGIR */}
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
      {/* RENDERIZADO DE LOS CHILDREN COMPONENTES ELEGIDOS */}
      {React.Children.toArray(
        shelfChildren?.map((children) => {
          return (
            {
              "product-summary-name": (
                <ProductSummaryName/>
              ),
              "product-summary-description": (
                <>elegiste el product summary description</>
              ),
            }[children]
          );
        })
      )}
      <CreateComponentsButton
        createComponents={createComponents}
        productSummaryShelfName={productSummaryShelfName}
      />
      <JsonOutput components={components} />
    </div>
  );
};
