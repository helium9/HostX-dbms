import NavbarComponent from "../components/NavbarComponent";
import userLogo from "../images/userLogo.svg";
import downArrowFilled from "../images/downArrowFilled.svg";
import FooterComponent from "../components/FooterComponent";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Image,
  ButtonGroup,
  Divider,
} from "@nextui-org/react";
import editPencil from "../images/editPencil.svg";
import blueCross from "../images/blueCross.svg";
import blueEditPencil from "../images/blueEditPencil.svg";


import facei from "../images/girl.jpg"
import stopForm from "../images/stopForm.svg";
import viewForm from "../images/viewForm.svg";
import whiteEditPencil from "../images/whiteEditPencil.svg";
import PropTypes from 'prop-types'
import react,{useState} from "react"
// export default function Aboutme(){
//     return (<div>
//         <img src={facei} alt="image"></img>
        
//     </div>)
// }
import githubicon from "../images/Vectorgithub.svg"
import instaicon from "../images/Vectorinsta.svg"
import linkedinicon from "../images/Vectorlinkedin.svg"
import mailicon from "../images/Vectormail.svg"

import icons from "../images/Frame 34.svg"





export default function Aboutme(prop) {
  
    const [name,setname]=useState("Ybhinav Yangil")


  return (
   
    <div >
   
    
    
    <Card isFooterBlurred className=" max-w-sm md:w-sm  h-[300px]  rounded-xl ">
      
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src={prop.imageurl}
      />
      <CardFooter className="absolute bg-black/30 bottom-0 h-[80px] border-zinc-100/50 z-10 rounded-b-xl  justify-between">
        <div className="pl-2">
          <p className="text-white text-xl font-semibold ">{prop.name}</p>
          <p className="text-white text-lg">{prop.branch}</p>
        </div>
        <div className="flex flex-row justify-self-center space-x-2 pr-2 ">
        <a href="https://instagram.com/abhinav_gangil?igshid=MzRlODBiNWFlZA==" class="group inline-block relative">
  <img src={instaicon} alt="Instagram Icon" class="group-hover:-translate-y-1 pt-3 transition-transform transform-gpu"/>
        </a>

<a href="https://github.com/xenom2004" class="group inline-block relative">
  <img src={githubicon} alt="GitHub Icon" class="group-hover:-translate-y-1 pt-3 pt-2 transition-transform transform-gpu" />
</a>
<a href="mailto:youremail@example.com" class="group inline-block relative">
  <img src={mailicon} alt="Mail Icon" class="group-hover:-translate-y-1 pt-3 transition-transform transform-gpu" />
</a>
<a href="https://www.linkedin.com/in/abhinav-gangil-193594255/" class="group inline-block relative">
  <img src={linkedinicon} alt="LinkedIn Icon" class="group-hover:-translate-y-1 pt-3 transition-transform transform-gpu" />
</a>

        
        </div>
        
      </CardFooter>
    </Card>
  </div>
  );
}


Aboutme.propTypes={
name:PropTypes.string
    ,branch:PropTypes.string
    // imageurl:PropTypes.string
}
Button.defaultProps={
    name:"Ybhinav Yangil",
    branch:"CSE"
    // ,
    // imageurl:"../images/girl.jpg"

}
