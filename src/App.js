import React from "react";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import FullProjects from "./Components/FullProjects";
import MoreAbout from "./Components/MoreAbout";
import Notfound from "./Components/Notfound";
import Testimonies from "./Components/Testimonies";
import Contacts from "./Components/Contacts";
import Locationss from "./Components/Locations";



function App() {
  return (
    <Router>
      <Link className='hidden' to="/">Home</Link>
      <Link className='hidden' to="/moreprojects">FullProjects</Link>
      <Link className='hidden' to="/abouts">MoreAbout</Link>
      <Link className='hidden' to="/testimonies">Testimonies</Link>
      <Link className='hidden' to="/contacts">Contacts</Link>
      <Link className='hidden' to="/locations">Locations</Link>
      

      <main>
      <Routes>
        <Route path='/moreprojects' element={<FullProjects/>}/>
        <Route path='/abouts' element={<MoreAbout/>}/>
        <Route path='/locations' element={<Locationss/>}/>
        <Route path='/testimonies' element={<Testimonies/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/' element={<Home />}/>
        <Route path='*' element= {<Notfound />} />
        
        </Routes> 
        
      </main> 
     </Router>
  );
}

export default App;
