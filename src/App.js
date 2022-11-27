import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/Home/HomePage';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/home" element={<HomePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
