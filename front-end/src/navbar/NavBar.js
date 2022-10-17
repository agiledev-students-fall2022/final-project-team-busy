import NavComponent from './NavComponent.js';
import Home from '../home/Home';
import Friends from '../Friends'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const NavBar = props => {
    return (
        <Router>
            <NavComponent />
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/friends' element={<Friends />} />
            </Routes>
        </Router>
    );
}

export default NavBar;