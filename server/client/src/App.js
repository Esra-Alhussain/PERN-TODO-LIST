import { Fragment } from 'react';
import './App.css';

//componenets 

import InputTodo from './components/InputTodo';

function App() {
  return (
    <Fragment>
      <div className='container'>
      <InputTodo />
      </div>
    </Fragment>
  );
}

export default App;