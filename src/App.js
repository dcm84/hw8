import './App.css';
import './bootstrap.min.css'

import UseEffect from './UseEffect/UseEffect.js';
import GetData from './useJsonFetch/GetData.js';


function App() {
  return (
    <>
      <UseEffect />
      <GetData url={process.env.REACT_APP_FETCH_DATA_URL} />
      <GetData url={process.env.REACT_APP_FETCH_ERROR_URL} />
      <GetData url={process.env.REACT_APP_FETCH_LOADING_URL} />
    </>
  );
}

export default App;
