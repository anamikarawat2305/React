
import './App.css';

import Banner from './components/Banner';
import MoviesList from './components/MoviesList';
import NavBar from './components/NavBar';
import Favourites from './components/Favourites';
function App() {
  return (
    <>
      <NavBar />
      {  /* <Banner />
      <MoviesList/>*/ }
      <Favourites />
    </>

  );
}

export default App;
