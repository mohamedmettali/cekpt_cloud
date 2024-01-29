import React from 'react';
import GoogleMapComponent from './components/GoogleMapComponent';

const App = () => {
  return (
    <div style={{ height: '20vh', display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '800px', margin: '0 auto' }}>
      <GoogleMapComponent />
    </div>
  );
};

export default App;