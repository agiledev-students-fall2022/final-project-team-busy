import NavComponent from './NavComponent.js';
import Home from '../home/Home';
import LookUp from '../lookup/LookUp.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreateEvents from '../create-events/CreateEvents.js';

const NavBar = props => {
    return (
        <Router>
            <NavComponent />
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/lookup' element={<LookUp />} />
                <Route path='/create-event' element={<CreateEvents />} />
            </Routes>
        </Router>
    );
}

export default NavBar;