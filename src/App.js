import React from 'react';

export const onPress = ({ config }) => {
  if(config.link) {
    window.open(config.link, "_blank");
  }
}

const styles = {
  borderRadius: '4px',
  padding: '2em',
  backgroundColor: 'green',
  color: 'white',
}

const App = ({ config, setConfig }) => {
  return (
    <div style={styles} >
      <h3>hotlinker plugin</h3>
      <div className="setting">
        <label htmlFor="link">link: </label>
        <input 
          type="text" 
          name="link" 
          placeholder="http://" 
          onChange={(e) => setConfig({ link: e.target.value }) } 
          value={config.link || ""} 
        />
      </div>
    </div>
  )
};

export default App;
