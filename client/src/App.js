import {Routes, Route, Navigate} from "react-router-dom";
import Dashboard from "./pages/Dashboard"
import Forms from "./pages/Forms";
import AboutPage from "./pages/AboutUs";
import LandingPage from "./pages/LandingPage" 
// import DashboardTest from "./pages/DashboardTest"
// import DashboardTest2 from "./pages/DashboardTest2"
import AdminTable from "./pages/AdminTable"
import PrefTable from "./pages/PrefTable";


const User_Types={
  PUBLIC:"Public User",
  NORMAL_USER:"Normal User",
  ADMIN_USER:"Admin User"
}

const CURRENT_USER_TYPE=User_Types.ADMIN_USER

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

      <Route path="/" element={
        <PublicElement>
            <LandingPage />
        </PublicElement>}>
      </Route>

      {/* <Route path="/admin" element={<AdminElement><Dashboard/></AdminElement>}></Route> */}
      <Route path="/admin2" element={<AdminElement><Dashboard/></AdminElement>}></Route>
      {/* <Route path="/admin3" element={<AdminElement><DashboardTest2/></AdminElement>}></Route> */}
      <Route path="/form" element={<UserElement><Forms /></UserElement>}></Route>
      <Route path="/Ptable" element={<UserElement><PrefTable /></UserElement>}></Route>
      <Route path="/table" element={<AdminTable />}></Route>
      <Route path="/about" element={<UserElement><AboutPage /></UserElement>}></Route>
    </Routes>
    </>
  );
}

function PublicElement({children}){
  return<>
    {children}</>;
}
function UserElement({children}){
  if(CURRENT_USER_TYPE===User_Types.ADMIN_USER || User_Types.NORMAL_USER){
    return<>
      {children}</>;}
  else{
    return <Navigate to={"/"}/>;

    // <div>You do not have access to this page</div>
  }
}
function AdminElement({children}){
  if(CURRENT_USER_TYPE===User_Types.ADMIN_USER){
    return<>
      {children}</>;}
  else{
    return <Navigate to={"/"}/>;

    // <div>You do not have access to this page</div>
  }
}

export default App;
