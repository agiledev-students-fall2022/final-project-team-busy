//import Login from "../login/Login";
import './Home.css'
import PersonalCalendar from '../Components/PersonalCalendar';



function Home() {
  return (
    <div className='intro'>
      <h1 className='heading'>Your Calendar</h1>
      <div> <PersonalCalendar/></div>
      <h2 className='schedule'>Upcoming Schedling </h2>
    </div>
    
  );
}
export default Home;
