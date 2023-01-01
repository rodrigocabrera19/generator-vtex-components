import { useShelf } from "../context/ShelfContext";

const ProductSummaryName = () => {
  const { setProps, state, createComponents, components } = useShelf();
  return (
    <div>
      <section>
        <label>showFieldsProps:</label>
        <input
          onChange={setProps}
          type="checkbox"
          name="showProductReference"
        />
        Mostrar referencia de producto
        <input onChange={setProps} type="checkbox" name="showBrandName" />
        Mostrar nombre de la marca
      </section>

      <section>
        <label htmlFor="tag">
          Tag
          <input
            onChange={setProps}
            type="text"
            name="tag"
            id=""
            value={state?.props.tag}
          />
        </label>
      </section>
    </div>
  );
};

export default ProductSummaryName;
