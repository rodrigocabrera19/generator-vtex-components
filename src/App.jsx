import "./App.css";
import { VtexComponentsProvider } from "./context/VtexComponentsContext";
import RichText from "./view/RichText";
import Sliderlayout from "./view/Sliderlayout";

export default () => (
  <VtexComponentsProvider>
    <App />
  </VtexComponentsProvider>
);

function App() {
  return (
    <div className="App">
     {/*  <RichText /> */}
      <Sliderlayout />
    </div>
  );
}
