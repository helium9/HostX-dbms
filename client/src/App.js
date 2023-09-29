import {Routes, Route} from "react-router-dom";
import LandingPage from "./pages/LandingPage"
import Dashboard from "./pages/Dashboard"
import Preferences from "./pages/Preferences"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/admin" element={<Dashboard />}></Route>
      <Route path="/form" element={<Preferences />}></Route>
    </Routes>
    </>
  );
}

export default App;
