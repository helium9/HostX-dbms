import {Routes, Route} from "react-router-dom";
import LandingPage2 from "./pages/LandingPageabhi"
import Dashboard from "./pages/Dashboard"
import Preferences from "./pages/Preferences"
import Dashboard2 from "./pages/test";
import Forms2 from "./pages/Forms2";
import AboutPage from "./pages/AboutUs";
import LandingPage from "./pages/LandingPage" 


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/admin" element={<Dashboard/>}></Route>
      <Route path="/form" element={<Preferences />}></Route>
      <Route path="/test" element={<Dashboard2 />}></Route>
      <Route path="/form2" element={<Forms2 />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/you" element={<LandingPage2 />}></Route>
    </Routes>
    </>
  );
}

export default App;
