import { Routes , Route } from 'react-router-dom';
import logo from './icon.svg';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<map />}/>
      <Route path='/' element={<quiz />}/>
    </Routes>
  );
}

export default App;
