import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import Resume from './components/Resume/Resume';
import './App.scss';

const App = () => {
  const componentRef = useRef();

  return (
    <div className="App">
      <ReactToPrint
        trigger={() => (
          <button className="print-button">Print this out!</button>
        )}
        content={() => componentRef.current}
      />
      <Resume reference={componentRef} />
    </div>
  );
};

export default App;
