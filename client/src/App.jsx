   // src/App.js
   import React from 'react';
   import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
   import Navbar from './components/Navbar';
   import PersonalityType from './pages/PersonalityType';
   import Home from './pages/Home';
   import './i18n'; // Import i18n configuration
import EnneagramPersonalityTest from './components/tests/EnneagramPersonalityTest';
import DISCPersonalityTest from './components/tests/DISCPersonalityTest';

   const App = () => {
       return (
           <Router>
               <Navbar />
               <main className="p-4">
                   <Routes>
                       <Route path="/" element={<Home />} />
                       <Route path="/personality" element={<PersonalityType />} />
                       <Route path='/EnneagramPersonalityTest' element={<EnneagramPersonalityTest/>}/>
                       <Route path='/DISCPersonalityTest'  element={<DISCPersonalityTest/>}/>
                   </Routes>
               </main>
           </Router>
       );
   };

   export default App;