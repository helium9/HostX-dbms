import {Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard"
import Forms from "./pages/Forms";
import AboutPage from "./pages/AboutUs";
import LandingPage from "./pages/LandingPage" 


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/admin" element={<Dashboard/>}></Route>
      <Route path="/form" element={<Forms />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
    </Routes>
    </>
  );
}

export default App;
