import { Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import CountriesPage from './pages/Countries/CountriesPage';
import CountryPage from './pages/Country/CountryPage';
import HomePage from './pages/Home/HomePage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/countries" element={<CountriesPage />}></Route>
        <Route path="/countries/:countryCode" element={<CountryPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
