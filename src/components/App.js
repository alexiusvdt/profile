import React from 'react';
import PageControl from './PageControl';
import Background from '../img/background.jpg';

function App() {
  return (
    <div style={{ backgroundImage: `url(${Background})` }}>
      <PageControl />
    </div>
  );
}

export default App;
