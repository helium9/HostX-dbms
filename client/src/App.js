import {Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard"
import Forms from "./pages/Forms";
import AboutPage from "./pages/AboutUs";
import LandingPage from "./pages/LandingPage" 
import DashboardTest from "./pages/DashboardTest"
import { useEffect } from "react";

function App() {
  // function handleCallbackResponse(res){
  //   console.log("Encoded JWT ID token "+res.credential);
  // }
  // useEffect(()=>{
  //   /*global google*/
  //   google.accounts.id.initialize({
  //     client_id:"47948327808-de0t7d7rj13malrb61d03juo7h3hm4n3.apps.googleusercontent.com",
  //     callback:handleCallbackResponse}

  //   );
  //   google.accounts.id.renderButton(
  //     document.getElementById("signInDiv"),
  //     {theme:"outline",size:"large"}
  //   );

  // },[]);

  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/admin" element={<Dashboard/>}></Route>
      <Route path="/admin2" element={<DashboardTest/>}></Route>
      <Route path="/form" element={<Forms />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
    </Routes>
    </>
  );
}

export default App;
