import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Logup from "./pages/Logup.jsx";
import Landing from "./pages/Landing.jsx";
import AlumniProfile from "./pages/Alumniprofile.jsx";
import Studentprofile from "./pages/Studentprofile.jsx";
import Profile from "./pages/Profile.jsx";
import Home from "./pages/Home.jsx";


function App() {


  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Landing/>} />
              <Route path="/logup" element={<Logup/>} />
              <Route path="/alumni-profile" element={<AlumniProfile/>} />
              <Route path="/student-profile" element={<Studentprofile/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/home" element={<Home/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App
