import { useVtexComponents } from "../context/VtexComponentsContext";

const CreateComponentsButton = () => {
  const { state, creatorComponents } = useVtexComponents();

  return (
    <div>
      <button onClick={() => creatorComponents()}>Generator json</button>
    </div>
  );
};
export default CreateComponentsButton;
