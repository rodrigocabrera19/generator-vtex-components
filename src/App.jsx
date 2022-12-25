import "./App.css";
import {
  useVtexComponents,
  VtexComponentsProvider,
} from "./context/VtexComponentsContext";
import ComponetsSelector from "./view/ComponetsSelector";
import RichText from "./view/RichText";
import Sliderlayout from "./view/Sliderlayout";

export default () => (
  <VtexComponentsProvider>
    <App />
  </VtexComponentsProvider>
);
function App() {
  const { stateSelectedComponent } = useVtexComponents();
  switch (stateSelectedComponent) {
    case "rich-text":
      return (
        <div className="App">
          <ComponetsSelector />
          <RichText />
        </div>
      );
    case "slider-layout":
      return (
        <div className="App">
          <ComponetsSelector />
          <Sliderlayout />
        </div>
      );

    default:
      return (
        <div className="App">
          <ComponetsSelector />
          <h2>Selecciona el componente que quieres crear...</h2>
        </div>
      );
  }
};
