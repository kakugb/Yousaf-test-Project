   // src/App.js
   import React from 'react';
   import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
   import Navbar from './components/Navbar';
   import PersonalityType from './pages/PersonalityType';
   import Home from './pages/Home';
   import './i18n'; // Import i18n configuration
import EnneagramPersonalityTest from './components/tests/EnneagramPersonalityTest';
import DISCPersonalityTest from './components/tests/DISCPersonalityTest';
import ResultPage from './components/tests/ResultPage';
import BigFivePersonalityTest from './components/tests/BigfivePersonlityTest';
import BigFiveResultPage from './components/tests/BigFiveResultPage.JSX';
import MbtiResultPage from './components/tests/MbtiResultPage';
import MbtiPersonalityTest from './components/tests/MbtiPersonalityTest';
import CareerAptitudePersonalityTest from './components/tests/CareerAptitudePersonalityTest';
import CareerAptitudeResultPage from './components/tests/CareerAptitudeResultPage';
import EnneagramResultPage from './components/tests/EnneagramResultPage';
import EmotionalPersonalityTest from './components/tests/EmotionalPersonalityTest';
import EmotionalResultPage from './components/tests/EmotionalResultPage';
import INTPBlogs from './components/blogs/INTPBlogs';


   const App = () => {
       return (
           <Router>
               <Navbar />
               <main className="p-4">
                   <Routes>
                       <Route path="/" element={<Home />} />
                       <Route path="/personality" element={<PersonalityType />} />
                       <Route path='/DISCPersonalityTest'  element={<DISCPersonalityTest/>}/>
                       <Route path='/BIGFIVEPersonalityTest' element={<BigFivePersonalityTest/>}/>
                       <Route path='/MBTIPersonalityTest'  element={<MbtiPersonalityTest/>}/>
                       <Route path="/bigfive-result" element={<BigFiveResultPage />} />
                       <Route path="/result" element={<ResultPage />} />
                       <Route path='/mbti-result' element={<MbtiResultPage/>}/>
                       <Route path='/CareerAptitudePersonalitytest' element={<CareerAptitudePersonalityTest/>}/>
                       <Route path='/career-aptitude-result' element={<CareerAptitudeResultPage/>}  />
                       <Route path='/EnneagramPersonalityTest' element={<EnneagramPersonalityTest/>}/>
                       <Route path="/enneagram-result" element={<EnneagramResultPage />} />
                       <Route path='/EmotionalPersonalityTest' element={<EmotionalPersonalityTest/>}/>
                       <Route path='/emotional-result' element={<EmotionalResultPage/>}/>
                       <Route path='/intp-blogs' element={<INTPBlogs/>}/>
                   </Routes>
               </main>
           </Router>
       );
   };

   export default App;