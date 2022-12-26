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
  const TEXT_DEFAULT = "Debes seleccionar el componente que quieras crear";
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
          <ComponetsSelector />
          {TEXT_DEFAULT}
        </>
      )}
    </div>
  );
}
