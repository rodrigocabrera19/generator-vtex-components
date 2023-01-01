import "./App.css";
import CreateComponentsButton from "./components/CreateComponentsButton";
import JsonOutput from "./components/JsonOutput";
import {
  useVtexComponents,
  VtexComponentsProvider,
} from "./context/VtexComponentsContext";
import ComponetsSelector from "./view/ComponetsSelector";
import ProductSummaryShelf from "./view/ProductSummaryShelf";
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
      <h1>Vtex json generator</h1>
      <ComponetsSelector />

      {/* RENDERIZADO CONDICIONAL DE ACUERDO A LA SELECCIÓN DEL COMPONENTE */}
      {{
        "rich-text": (
          <>
            <RichText />
          </>
        ),
        "slider-layout": (
          <>
            <Sliderlayout />
          </>
        ),
        "product-summary-shelf": (
          <>
            <ProductSummaryShelf />
          </>
        ),
      }[stateSelectedComponent] || (
        <>
          <h2>{TEXT_DEFAULT}</h2>
        </>
      )}

      {/* SALIDA DEL JSON CREADO UNA VEZ SE CLIKEA EN EL BOTÓN DE GENERATOR */}
      
    </div>
  );
}
