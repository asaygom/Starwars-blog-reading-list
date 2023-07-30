import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import injectContext from './store/context'
import Home from './views/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default injectContext(App);
