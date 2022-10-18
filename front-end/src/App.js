import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home/Home';
import LookUp from './lookup/LookUp';
import CreateEvents from './create-events/CreateEvents';
import NavComponent from './navbar/NavBar';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Router>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/lookup' element={<LookUp />} />
                <Route path='/create-event' element={<CreateEvents />} />
            </Routes>
            <NavComponent />
        </Router>
    </div>
  );
}

export default App;
