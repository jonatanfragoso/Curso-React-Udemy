// Styles  CSS
import "./App.css";
import Challenge from "./components/Challenge";
import Events from "./components/Events";
// Components
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";

function App() {
  return (
    <>
      <div>
        <FirstComponent></FirstComponent>
        <TemplateExpressions></TemplateExpressions>
        <Events></Events>
        <Challenge></Challenge>
      </div>
    </>
  );
}

export default App;
