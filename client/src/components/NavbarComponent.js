// // import React from "react";
// import menuLogo from "../images/menu.svg";
// import AboutUs from "../pages/AboutUs.js";
// import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Input} from "@nextui-org/react";
// import {MailIcon} from '../images/MailIcon.jsx';
// import {LockIcon} from '../images/LockIcon.jsx';
// import React, { useState, useEffect } from "react";
// import axios from "axios";


// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   Link,
//   Button,
//   NavbarMenuToggle,
//   NavbarMenu,
//   NavbarMenuItem,
//   menuItems,
// } from "@nextui-org/react";

// export default function NavbarComponent({tokens}) {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   const menuItems = [
//     "Home",
//     "Docs",
//     "About Us",
//     "Log In",
//     "Sign Up",
//   ];
//   const [info, setInfo] = useState({
//     email:"",
//     password:"",
    
//   });
//   const [Signupinfo,setSignupinfo]=useState({name:"",email:"",contact:"",password:"",insti:"",});
//   const handleInputS = (event) => {
//     console.log(Signupinfo);
//     setSignupinfo({ ...Signupinfo, [event.target.name]: event.target.value });
//   };

//   const handleInput = (event) => {
//     // console.log(info);
//     setInfo({ ...info, [event.target.name]: event.target.value });
//   };

//   const {isOpen, onOpen, onOpenChange} = useDisclosure();
//   // const {isOpens, onOpens, onOpenChanges} = useDisclosure();
//   const [issignup,setissignup]=useState(false);
//   const handlesignup = (event) => {
//     console.log(issignup);
//     setissignup(!issignup);
//   };
  
//   const [isAuthenticated, setIsAuthenticated] = useState(tokens);

//   const handleGoogleLogin = () => {
   
//     window.location.href = 'http://localhost:8000/auth/google';
//   };

//   // useEffect(() => {
//   //   fetch('/check-authentication', {
//   //     method: 'GET',
//   //     headers: {
//   //       'Authorization': 'Bearer YOUR_JWT_TOKEN', // Replace with the user's JWT token
//   //     },
//   //   })
//   //     .then((response) => {
//   //       if (response.status === 200) {
//   //           setIsAuthenticated(true);
//   //       } else {    
//   //         setIsAuthenticated(false);
//   //       }
//   //     })
//   //     .catch((error) => {
//   //       console.error('Error checking authentication status:', error);
//   //       setIsAuthenticated(false); 
//   //     });
//   // }, []);


//   const handlesubmit=async ()=>{
//     handlesignup();
//     const response = await axios.post('http://localhost:8000/register', Signupinfo);
//             console.log(response.data);}


//   const handleloginsubmit=async ()=>{
//     const response = await axios.post('http://localhost:8000/login', info);
//             console.log(response.data);
//             if (response.data.success) {
//               localStorage.setItem('adminID', response.data.adminID);
//               window.location.href = '/admin2'; 
//               setIsAuthenticated(true);
//             }}          

//   const handleLogout = () => {
//     console.log(issignup);
//     setIsAuthenticated(false);
// };
// const handlepassportlogout=async ()=>{
//   console.log("in log")
  
//   axios
//       .get("http://localhost:8000/logout", {
//         params: {
//           admin:"T"
//         },
//       })
//       .then((data) => {
//         console.log(data.data)
       
//         // setupdatecontact(data.data.Contact);
//         // setupdateemail(data.data.Email);
//         window.location.href = '/';
//         setIsAuthenticated(false);
        

        
//       })
//       .catch((err) => console.log(err));
//       alert("LoggedOut");
// }

//   return (
//     <Navbar
//       isBordered
//       isMenuOpen={isMenuOpen}
//       onMenuOpenChange={setIsMenuOpen}>
//       <NavbarBrand>
//         <p className="font-bold text-inherit italic text-3xl">HostX</p>
//       </NavbarBrand>
//       <NavbarContent className="hidden sm:flex gap-x-16" justify="center">
//         <NavbarItem>
//           <Link color="foreground" href="/" className="text-xl">
//             Home
//           </Link>
//         </NavbarItem>
//         <NavbarItem isActive>
//           <Link href="/form" aria-current="page" className="text-xl">
//             Docs
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="/about" className="text-xl">
//             About us
//           </Link>
//         </NavbarItem>
//       </NavbarContent>
//       <NavbarContent justify="end">
//         <NavbarItem className="hidden lg:flex">
//           <Link href="#" className="text-xl">
            
//           <>
//           {console.log(isAuthenticated)}
//           {isAuthenticated ? (
//             <Button onClick={handlepassportlogout} color="primary" className="text-xl">
//               Logout
//             </Button>
//           ) : (
            
//               <Button onClick={onOpen} color="primary" className="text-xl">
//                 Login
//               </Button>)}
//       <Modal 
//         isOpen={isOpen} 
//         onOpenChange={onOpenChange}
//         placement="top-center"
//         hideCloseButton={true}
//       >
//         <ModalContent>
//           {(onClose) => (
//             <>
//               <ModalHeader className="flex flex-col gap-1 text-2xl">Log in</ModalHeader>
//               <ModalBody>
              
//                 <Input
//                   autoFocus
//                   endContent={
//                     <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
//                   }
//                   label="email"
//                   placeholder="Enter your email"
//                   variant="bordered"
//                   onChange={handleInput}
//                   name="email"
//                   value={info.email}
//                   classNames={{
//                     label: "text-lg",
//                     input: [
//                       "placeholder:text-xl",
//                       "text-xl"

//                     ],
//                     innerWrapper: "bg-transparent",
//                     inputWrapper: [
//                    "h-20",
//                     ],
//                   }}
//                 />
//                 <Input
//                   endContent={
//                     <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
//                   }
//                   label="Password"
//                   placeholder="Enter your password"
//                   type="password"
//                   name="password"
//                   value={info.password}
//                   onChange={(handleInput)}
//                   variant="bordered"
//                   classNames={{
//                     label: "text-lg",
//                     input: [
//                       "placeholder:text-xl",
//                       "text-xl"

//                     ],
//                     innerWrapper: "bg-transparent",
//                     inputWrapper: [
//                    "h-20",
//                     ],
//                   }}
//                 />
//                 <div className="flex py-2 px-1 justify-between">
//                   <Checkbox
//                     classNames={{
//                       label: "text-small",
//                     }}
//                   >
//                     Remember me
//                   </Checkbox>
//                   <Link color="primary" href="#" size="sm">
//                     Forgot password?
//                   </Link>
//                 </div>
//               </ModalBody>
//               <ModalFooter>
//                 <Button color="danger" variant="light" onPress={onClose}>
//                   Close
//                 </Button>
//                 <Button color="primary" onPress={onClose} onClick={handleloginsubmit} >
//                   Sign in
//                 </Button>
//               </ModalFooter>
//               <Button color="success" onClick={handleGoogleLogin} className="m-6 mx-12 text-xl text-white">Login with Google</Button>

//             </>
//           )}
//         </ModalContent>
//       </Modal>
//     </>
//             </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Button
//             onClick={handlesignup}
//             onPress={onOpen}
//             as={Link}
//             color="primary"
          
//             variant="flat"
//             className="invisible sm:visible text-xl h-10 rounded-lg"
//           >
//             Sign Up
//           </Button>
//           {issignup && <Modal 
//         isOpen={isOpen} 
//         onOpenChange={onOpenChange}
//         placement="top-center"
//         hideCloseButton={true}
//       >
//         <ModalContent>
//           {(onClose) => (
//             <>
//               <ModalHeader className="flex flex-col gap-1 text-2xl">Sign Up</ModalHeader>
//               <ModalBody>
//               <Input
//                   autoFocus
//                   endContent={
//                     <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
//                   }
//                   label="name"
//                   value={Signupinfo.name}
//                   name="name"
//                   onChange={(handleInputS) }
//                   placeholder="Enter your name"
//                   variant="bordered"
//                   classNames={{
//                     label: "text-lg",
//                     input: [
//                       "placeholder:text-xl",
//                       "text-xl"

//                     ],
//                     innerWrapper: "bg-transparent",
//                     inputWrapper: [
//                    "h-20",
//                     ],
//                   }}
//                 />
//                 <Input
//                   autoFocus
//                   endContent={
//                     <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
//                   }
//                   label="Email"
//                   placeholder="Enter your email"
//                   variant="bordered"
//                   value={Signupinfo.email}
//                   name="email"
//                   onChange={(handleInputS) }
//                   classNames={{
//                     label: "text-lg",
//                     input: [
//                       "placeholder:text-xl",
//                       "text-xl"

//                     ],
//                     innerWrapper: "bg-transparent",
//                     inputWrapper: [
//                    "h-20",
//                     ],
//                   }}
//                 />
//                 <Input
//                   autoFocus
//                   endContent={
//                     <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
//                   }
//                   label="Contact"
//                   placeholder="Enter your contact"
//                   variant="bordered"
//                   value={Signupinfo.contact}
//                   name="contact"
//                   onChange={(handleInputS) }
//                   classNames={{
//                     label: "text-lg",
//                     input: [
//                       "placeholder:text-xl",
//                       "text-xl"

//                     ],
//                     innerWrapper: "bg-transparent",
//                     inputWrapper: [
//                    "h-20",
//                     ],
//                   }}
//                 />
//                 <Input
//                   endContent={
//                     <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
//                   }
//                   label="Password"
//                   placeholder="Enter your password"
//                   type="password"
//                   value={Signupinfo.password}
//                   name="password"
//                   onChange={(handleInputS) }
//                   variant="bordered"
//                   classNames={{
//                     label: "text-lg",
//                     input: [
//                       "placeholder:text-xl",
//                       "text-xl"

//                     ],
//                     innerWrapper: "bg-transparent",
//                     inputWrapper: [
//                    "h-20",
//                     ],
//                   }}
//                 />
//                 <Input
//                   endContent={
//                     <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
//                   }
//                   label="institute name"
//                   placeholder="Enter your institute name"
//                   type="text"
//                   variant="bordered"
//                   value={Signupinfo.insti}
//                   name="insti"
//                   onChange={handleInputS }
//                   classNames={{
//                     label: "text-lg",
//                     input: [
//                       "placeholder:text-xl",
//                       "text-xl"

//                     ],
//                     innerWrapper: "bg-transparent",
//                     inputWrapper: [
//                    "h-20",
//                     ],
//                   }}
//                 />
                
                
//               </ModalBody>
//               <ModalFooter>
//                 <Button color="danger" variant="light" onPress={onClose} onClick={handlesignup}>
//                   Close
//                 </Button>
//                 <Button color="primary" onPress={onClose} onClick={handlesubmit}>
//                   Sign in
//                 </Button>
//               </ModalFooter>

//               <Button color="success" onClick={handleGoogleLogin} className="m-6 mx-12 text-xl text-white">Login with Google</Button>
              

//             </>
//           )}
//         </ModalContent>
//       </Modal>}
//         </NavbarItem>
//       </NavbarContent>
//       <NavbarContent className="sm:hidden" justify="end">
//         <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
//       </NavbarContent>
//       <NavbarMenu className="absolute left-60">
//         {menuItems.map((item, index) => (
//           <NavbarMenuItem key={`${item}-${index}`}>
//             <Link
//               className="w-full text-4xl my-4"
//               color={
//                 index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
//               }
//               href={item}
//               size="lg"
//             >
//               {item}
//             </Link>
//           </NavbarMenuItem>
//         ))}
//       </NavbarMenu>
//     </Navbar>
//   );
// }
// NavbarComponent.defaultProps = {
//  tokens: true,
 
// };

// --------------------------------------------------------------------------------

import React, { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate } from 'react-router-dom';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Checkbox,
  useDisclosure,
} from "@nextui-org/react";
import { MailIcon } from "../images/MailIcon.jsx";
import { LockIcon } from "../images/LockIcon.jsx";

export default function NavbarComponent({ tokens }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Home", "Docs", "About Us", "Log In", "Sign Up"];
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const [Signupinfo, setSignupinfo] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    insti: "",
  });

  const [issignup, setissignup] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [isAuthenticated, setIsAuthenticated] = useState(tokens);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setIsAuthenticated(true);
    }
  }, []);

  const handlesubmit = async () => {
    handlesignup();
    try {
      const response = await axios.post(
        "http://localhost:8000/register",
        Signupinfo
      );
      console.log(response.data);
    } catch (error) {
      console.error("Registration failed:", error.response.data);
    }
  };

  const handleloginsubmit = async () => {
    try {
      const response = await axios.post("http://localhost:8000/login", info);
      console.log(response.data);
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        window.location.href = "/admin2";
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Login failed:", error.response.data);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  // const handlepassportlogout = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:8000/logout", {
  //       params: {
  //         admin: "T",
  //       },
  //     });
  //     console.log(response.data);
  //     window.location.href = "/";
  //     setIsAuthenticated(false);
  //   } catch (error) {
  //     console.error("Logout failed:", error.response.data);
  //   }

  //   alert("LoggedOut");
  // };
  // const router = useNavigate();
  const router = useNavigate();

  const handlepassportlogout = async () => {
    try {
    
      await axios.get("http://localhost:8000/logout", {
        params: {
          admin: "T",
        },
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
  
    
      localStorage.removeItem("token");
  
      //
      setIsAuthenticated(false);
      
      console.log("log out+++++++");
   
      router('/');
  
      alert("LoggedOut");
    } catch (error) {
      console.error("Logout failed:", error.response.data);
    }
  };
  
  const handleInputS = (event) => {
    setSignupinfo({ ...Signupinfo, [event.target.name]: event.target.value });
  };

  const handleInput = (event) => {
    setInfo({ ...info, [event.target.name]: event.target.value });
  };

  const handlesignup = () => {
    setissignup(!issignup);
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8000/auth/google";
  };

  return (
        <Navbar
          isBordered
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}>
          <NavbarBrand>
            <p className="font-bold text-inherit italic text-3xl">HostX</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-x-16" justify="center">
            <NavbarItem>
              <Link color="foreground" href="/" className="text-xl">
                Home
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="/form" aria-current="page" className="text-xl">
                Docs
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="/about" className="text-xl">
                About us
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="#" className="text-xl">
                
              <>
              {console.log(isAuthenticated)}
              {isAuthenticated ? (
                <Button onClick={handlepassportlogout} color="primary" className="text-xl">
                  Logout
                </Button>
              ) : (
                
                  <Button onClick={onOpen} color="primary" className="text-xl">
                    Login
                  </Button>)}
          <Modal 
            isOpen={isOpen} 
            onOpenChange={onOpenChange}
            placement="top-center"
            hideCloseButton={true}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1 text-2xl">Log in</ModalHeader>
                  <ModalBody>
                  
                    <Input
                      autoFocus
                      endContent={
                        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      }
                      label="email"
                      placeholder="Enter your email"
                      variant="bordered"
                      onChange={handleInput}
                      name="email"
                      value={info.email}
                      classNames={{
                        label: "text-lg",
                        input: [
                          "placeholder:text-xl",
                          "text-xl"
    
                        ],
                        innerWrapper: "bg-transparent",
                        inputWrapper: [
                       "h-20",
                        ],
                      }}
                    />
                    <Input
                      endContent={
                        <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      }
                      label="Password"
                      placeholder="Enter your password"
                      type="password"
                      name="password"
                      value={info.password}
                      onChange={(handleInput)}
                      variant="bordered"
                      classNames={{
                        label: "text-lg",
                        input: [
                          "placeholder:text-xl",
                          "text-xl"
    
                        ],
                        innerWrapper: "bg-transparent",
                        inputWrapper: [
                       "h-20",
                        ],
                      }}
                    />
                    <div className="flex py-2 px-1 justify-between">
                      <Checkbox
                        classNames={{
                          label: "text-small",
                        }}
                      >
                        Remember me
                      </Checkbox>
                      <Link color="primary" href="#" size="sm">
                        Forgot password?
                      </Link>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={onClose} onClick={handleloginsubmit} >
                      Sign in
                    </Button>
                  </ModalFooter>
                  {/* <Button color="success" onClick={handleGoogleLogin} className="m-6 mx-12 text-xl text-white">Login with Google</Button> */}
    
                </>
              )}
            </ModalContent>
          </Modal>
        </>
                </Link>
            </NavbarItem>
            <NavbarItem>
              <Button
                onClick={handlesignup}
                onPress={onOpen}
                as={Link}
                color="primary"
              
                variant="flat"
                className="invisible sm:visible text-xl h-10 rounded-lg"
              >
                Sign Up
              </Button>
              {issignup && <Modal 
            isOpen={isOpen} 
            onOpenChange={onOpenChange}
            placement="top-center"
            hideCloseButton={true}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1 text-2xl">Sign Up</ModalHeader>
                  <ModalBody>
                  <Input
                      autoFocus
                      endContent={
                        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      }
                      label="name"
                      value={Signupinfo.name}
                      name="name"
                      onChange={(handleInputS) }
                      placeholder="Enter your name"
                      variant="bordered"
                      classNames={{
                        label: "text-lg",
                        input: [
                          "placeholder:text-xl",
                          "text-xl"
    
                        ],
                        innerWrapper: "bg-transparent",
                        inputWrapper: [
                       "h-20",
                        ],
                      }}
                    />
                    <Input
                      autoFocus
                      endContent={
                        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      }
                      label="Email"
                      placeholder="Enter your email"
                      variant="bordered"
                      value={Signupinfo.email}
                      name="email"
                      onChange={(handleInputS) }
                      classNames={{
                        label: "text-lg",
                        input: [
                          "placeholder:text-xl",
                          "text-xl"
    
                        ],
                        innerWrapper: "bg-transparent",
                        inputWrapper: [
                       "h-20",
                        ],
                      }}
                    />
                    <Input
                      autoFocus
                      endContent={
                        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      }
                      label="Contact"
                      placeholder="Enter your contact"
                      variant="bordered"
                      value={Signupinfo.contact}
                      name="contact"
                      onChange={(handleInputS) }
                      classNames={{
                        label: "text-lg",
                        input: [
                          "placeholder:text-xl",
                          "text-xl"
    
                        ],
                        innerWrapper: "bg-transparent",
                        inputWrapper: [
                       "h-20",
                        ],
                      }}
                    />
                    <Input
                      endContent={
                        <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      }
                      label="Password"
                      placeholder="Enter your password"
                      type="password"
                      value={Signupinfo.password}
                      name="password"
                      onChange={(handleInputS) }
                      variant="bordered"
                      classNames={{
                        label: "text-lg",
                        input: [
                          "placeholder:text-xl",
                          "text-xl"
    
                        ],
                        innerWrapper: "bg-transparent",
                        inputWrapper: [
                       "h-20",
                        ],
                      }}
                    />
                    <Input
                      endContent={
                        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      }
                      label="institute name"
                      placeholder="Enter your institute name"
                      type="text"
                      variant="bordered"
                      value={Signupinfo.insti}
                      name="insti"
                      onChange={handleInputS }
                      classNames={{
                        label: "text-lg",
                        input: [
                          "placeholder:text-xl",
                          "text-xl"
    
                        ],
                        innerWrapper: "bg-transparent",
                        inputWrapper: [
                       "h-20",
                        ],
                      }}
                    />
                    
                    
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose} onClick={handlesignup}>
                      Close
                    </Button>
                    <Button color="primary" onPress={onClose} onClick={handlesubmit}>
                      Sign in
                    </Button>
                  </ModalFooter>
    
                  {/* <Button color="success" onClick={handleGoogleLogin} className="m-6 mx-12 text-xl text-white">Login with Google</Button> */}
                  
    
                </>
              )}
            </ModalContent>
          </Modal>}
            </NavbarItem>
          </NavbarContent>
          <NavbarContent className="sm:hidden" justify="end">
            <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
          </NavbarContent>
          <NavbarMenu className="absolute left-60">
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  className="w-full text-4xl my-4"
                  color={
                    index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                  }
                  href={item}
                  size="lg"
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      );
    }
    NavbarComponent.defaultProps = {
     tokens: true,
     
    };