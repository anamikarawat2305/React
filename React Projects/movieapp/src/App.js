
import './App.css';

import Banner from './components/Banner';
import MoviesList from './components/MoviesList';
import NavBar from './components/NavBar';
import Favourites from './components/Favourites';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (

    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route
          path='/'
          element={
            <>
              <Banner />
              <MoviesList />
            </>
          }
        />
        <Route path='/favourites' element={<Favourites />} />
      </Routes>

    </BrowserRouter>


  );
}

export default App;
