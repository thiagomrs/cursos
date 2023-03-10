//components
import FirstComponent from "./components/FirstComponent.js"
import TemplateExpressions from "./components/TemplateExpressions.js";
import MyComponent from "./components/MyComponent.js";
import Events from "./components/Events.js";
import Challenge from "./components/Challenge.js";

//styles / CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
        <FirstComponent />
        <TemplateExpressions />
        <MyComponent />
        <Events />
        <Challenge />
    </div>
  );
}

export default App;
