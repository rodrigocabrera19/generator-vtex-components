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
  const TEXT_DEFAULT = "Debes seleccionar el componente que quieres crear";
  return (
    <div className="App">
      {{
        "rich-text": (
          <>
            <ComponetsSelector />
            <RichText />
          </>
        ),
        "slider-layout": (
          <>
            <ComponetsSelector />
            <Sliderlayout />
          </>
        ),
      }[stateSelectedComponent] || (
        <>
          <h1>Vtex json generator</h1>
          <ComponetsSelector />
          <h2>{TEXT_DEFAULT}</h2>
        </>
      )}
    </div>
  );
}
