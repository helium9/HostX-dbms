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

import PropTypes from 'prop-types'
import react,{useState} from "react"
// export default function Aboutme(){
//     return (<div>
//         <img src={facei} alt="image"></img>
        
//     </div>)
// }
import githubicon from "../images/github-mark-white.svg"
import instaicon from "../images/Vectorinsta.svg"
import linkedinicon from "../images/Vectorlinkedin.svg"
import mailicon from "../images/Vectormail.svg"






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
        <img src={instaicon} className="pb-4 hover:pb-5 "></img>
        <img src={githubicon} className="pb-4 hover:pb-4 pt-2 hover:pt-0"></img>
        <img src={mailicon} className="pb-4 hover:pb-5 "></img>
        <img src={linkedinicon} className="pb-4 hover:pb-5"></img>
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
