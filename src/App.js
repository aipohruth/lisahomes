import React from "react";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import FullProjects from "./Components/FullProjects";
import MoreAbout from "./Components/MoreAbout";




function App() {
  return (
    <Router>
      <Link className='hidden' to="/">Home</Link>
      <Link className='hidden' to="/moreprojects">FullProjects</Link>
      <Link className='hidden' to="/abouts">MoreAbout</Link>
      

      <main>
      <Routes>
        <Route path='/moreprojects' element={<FullProjects/>}/>
        <Route path='/abouts' element={<MoreAbout/>}/>
        <Route path='/' element={<Home />}/>
        
        </Routes> 
        
      </main> 
     </Router>
  );
}

export default App;
