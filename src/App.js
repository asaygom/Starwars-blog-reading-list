import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='py-2 d-flex justify-content-around card-bg'>
        <Card />
        <Card />
        <Card />
      </div>
      <div className='py-2 d-flex justify-content-around card-bg'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
