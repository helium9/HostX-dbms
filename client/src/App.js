import {Routes, Route} from "react-router-dom";
import LandingPage from "./pages/LandingPage"
import Dashboard from "./pages/Dashboard"
import Preferences from "./pages/Preferences"
import {NextUIProvider} from "@nextui-org/react";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/admin" element={<NextUIProvider><Dashboard /></NextUIProvider>}></Route>
      <Route path="/form" element={<Preferences />}></Route>
    </Routes>
    </>
  );
}

export default App;
