import React from 'react';
import { Routes,Route } from 'react-router-dom';
import GridTask from "./components/gridtask";
import MuiFormV5 from './components/MuiFormV5';
import MuiFormV4 from './components/MuiFormV4';
import Home from "./components/Home";
function App() {
  return (
    <>
          <Routes>
          <Route path='/' element={<MuiFormV5 />} />
          <Route path='/v4' element={<MuiFormV4 />} />
          <Route path='/grid' element={<GridTask />} />
      </Routes>
    </>
  );
}

export default App;
