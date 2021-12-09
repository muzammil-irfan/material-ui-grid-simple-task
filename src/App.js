import React from 'react';
import { Routes,Route } from 'react-router-dom';
import GridTask from "./components/gridtask";
import Home from "./components/Home";
function App() {
  return (
    <>
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/grid' element={<GridTask />} />
      </Routes>
    </>
  );
}

export default App;
