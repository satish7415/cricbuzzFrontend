import React from 'react';
import Home from './component/Home';
import Nav from './component/Nav';
import Register from './component/Register';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import Livescore from './component/Livescore';
import Schedual from './component/Schedual';
import Archives from './component/Archives';
import Series from './component/Series';
import Teams from './component/Teams';
import Ranking from './component/Ranking';
import More from './component/More';
import Cricbuzhome from './component/Cricbuzhome';
import Live from './component/Live';
import Recent from './component/Recent';
import Upcoming from './component/Upcoming';
import Profile from './component/Profile';
function App() {
  return (
    <>   
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>  
      <Route path='/login' element={<Login/>} />  
      <Route path='/register' element={<Register/>} />
      <Route path='/livescore' element={<Livescore/>}>
      <Route path='/livescore/Live' element={<Live/>}/>
      <Route path="/livescore/recent" element={<Recent/>} />
      <Route path="/livescore/upcoming" element={<Upcoming/>} />
      </Route>
      <Route path='/schedule' element={<Schedual/>}/>
      <Route path='archives' element={<Archives/>} />
      <Route path='series' element={<Series/>} />
      <Route path='teams' element={<Teams/>} />
      <Route path='rankings' element={<Ranking/>}></Route>
      <Route path='more' element={<More/>}/>
      <Route path='/home' element={<Cricbuzhome/>} />
      <Route path="/profile" element={<Profile/>} />
    </Routes>
    </BrowserRouter>
    </>

  );
}
 
export default App;
