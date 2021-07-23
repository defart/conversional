import './App.css';
import ConfigSelection from "./ConfigSelection";
import RenderArea from "./RenderArea";

function App() {

  const handleRenderRequest = conf  => {
      alert(conf);
  };

  return (
    <div className="App">
        <ConfigSelection onConfigChange={config => handleRenderRequest(config)} />
        <RenderArea />
    </div>
  );
}

export default App;
