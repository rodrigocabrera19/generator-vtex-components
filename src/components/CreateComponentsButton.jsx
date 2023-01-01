const CreateComponentsButton = ({ createComponents, productSummaryShelfName }) => {

  return (
    <div>
      <button onClick={() => createComponents(productSummaryShelfName)}>Generator json</button>
    </div>
  );
};
export default CreateComponentsButton;
