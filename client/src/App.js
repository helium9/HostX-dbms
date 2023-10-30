import {Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard"
import Forms from "./pages/Forms";
import AboutPage from "./pages/AboutUs";
import LandingPage from "./pages/LandingPage" 
import DashboardTest from "./pages/DashboardTest"
import DashboardTest2 from "./pages/DashboardTest2"
import AdminTable from "./pages/AdminTable"


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/admin" element={<Dashboard/>}></Route>
      <Route path="/admin2" element={<DashboardTest/>}></Route>
      <Route path="/admin3" element={<DashboardTest2/>}></Route>
      <Route path="/form" element={<Forms />}></Route>
      <Route path="/table" element={<AdminTable />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
    </Routes>
    </>
  );
}

export default App;
