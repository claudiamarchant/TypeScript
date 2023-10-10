import React from 'react';
import './App.css';
//import de las rutas
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
//para importar todo más fácil
import { Items, Pokemon, Pokemons } from './pages';

function App() {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/pokemons/:name' element={<Pokemon />} />
          <Route path='/pokemons' element={<Pokemons />} />
          <Route path='/items' element={<Items />} />
          <Route path='/' element={<Pokemons />} />
        </Routes>
        {/* <h1>pokemon app</h1> */}
      </div>
    </Router>
  );
}

export default App;
