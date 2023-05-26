import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" exact element={< Home />}></Route>
    <Route path="/add" exact element={< AddEmployee />}></Route>

    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
