import React, {useState} from 'react';
import "./App.css";
import {data1, data2, withModalRefs} from "./configs"

const ConfigSelection = ({onConfigChange}) => {

    const [config, setConfig] = useState(withModalRefs);

    return <div className="config-selection-wrapper">
        <div className="config-preselect">
            <label>Preselect config</label>
            <select onChange={e => setConfig(e.target.value)} value={config}>
                <option value={data1} >data1.json</option>
                <option value={data2} >data2.json</option>
                <option value={withModalRefs} >data2.json With modal triggering</option>
                <option value='' >Clear selection</option>
            </select>
        </div>
        <div className="config-area">
            <textarea value={config} onChange={e => setConfig(e.target.value)} rows={32} cols={25} />
        </div>
        <div className="config-controls">
            <button type="button" onClick={ () => onConfigChange(config) }>Generate view</button>
        </div>
    </div>
};

export default ConfigSelection;
