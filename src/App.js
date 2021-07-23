import React from 'react';
import './App.css';
import ConfigSelection from "./ConfigSelection";
import RenderArea from "./RenderArea";
import {buildViewFromConfig} from "./lib/ViewBuilder";
import {useState} from "react";

function App() {
const [render, setRender] = useState(null);
  const handleRenderRequest = conf  => {
      const RenderedTree = buildViewFromConfig(conf);
      setRender(<RenderedTree />)
  };

  return (
    <div className="App">
        <ConfigSelection onConfigChange={config => handleRenderRequest(config)} />
        <RenderArea>{render}</RenderArea>
    </div>
  );
}

export default App;
