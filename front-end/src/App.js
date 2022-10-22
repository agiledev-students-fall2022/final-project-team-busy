import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home/Home';
import LookUp from './Pages/LookUp';
import CreateEvents from './create-events/CreateEvents';
import NavComponent from './navbar/NavBar';
import AccountSettings from './Pages/AccountSettings';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Router>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='Pages/LookUp' element={<LookUp />} />
                <Route path='/create-event' element={<CreateEvents />} />
                <Route path='/account-settings' element={<AccountSettings />} />
            </Routes>
            <NavComponent />
        </Router>
    </div>
  );
}

export default App;
