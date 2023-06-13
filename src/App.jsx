import { useState } from 'react';
import './app.scss';
import BmiForm from './components/BmiForm';
import Header from './components/header';
import Result from './components/Result';

function App() {

  const [state, setState] = useState({
    height: '',
    weight: '',
    result: '',
  }); 
  
  return (
    <div className="container">
      <Header />
      <BmiForm
        state={state}
        setState={setState}
      />
      <Result
        state={state} />
    </div>
  );
}

export default App;
