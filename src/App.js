import logo from './logo.svg';
import './App.css';

import First from './Components/First';
import Navbar from './Components/Navbar';
import StateBasic from './Components/StateBasic';
import StateEg1 from './Components/StateEg1';
import { Table } from '@mui/material';
import Table1 from './Components/Table1';
import { Route, Routes } from 'react-router-dom';
import ApiGet from './Components/ApiGet';

function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<StateBasic/>}/>
        <Route path='/first' element={<First/>}/>
        <Route path='/table' element={<Table1/>}/>
        <Route path='/axios' element={<ApiGet/>}/>
      </Routes>
      {/* <First/>
      <Table1/> */}
      
      
    </div>
  );
}

export default App;
