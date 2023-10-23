import NavbarComponent from "../components/NavbarComponent";
import { useState,useRef } from "react";
import { Button } from "@nextui-org/react";
import whiteTick from "../images/whiteTick.svg";
import FooterComponent from "../components/FooterComponent";
import React from 'react';
import {Input} from "@nextui-org/react";
import {useForm,Controller} from 'react-hook-form';
import {DevTool} from '@hookform/devtools';
import axios from 'axios'


// function InputComponent({ id, children = "Roll number", isDisabled = false }) {
//   const [active, setActive] = useState(false);
//   let opacity = isDisabled?"opacity-60":"opacity-100";
//   // let disabledStyles = isDisabled? { border: "", textColor: "text-white" }:{ border: "border-zinc-800", textColor: "text-gray-400" };
//   let activeAttributes = active
//     ? { border: "border-blue-600", textColor: "text-blue-500" }
//     : { border: "border-zinc-500", textColor: "text-white" };
//   return (
//     <div
//       className={`rounded-lg bg-zinc-900 border-2 flex flex-col p-3 pt-1 gap-1 ${activeAttributes.border} ${opacity}`}
//       onFocus={() => setActive(true)}
//       onBlur={() => setActive(false)}
//     >
//       <label htmlFor={id} className={`${activeAttributes.textColor}`}>
//         Roommate Preference
//       </label>
//       <input
//         className={`bg-transparent focus:outline-none text-2xl`}
//         disabled={isDisabled}
//         type="text"
//         name={id}
//         id={id}
//         placeholder={children}
//       />
//     </div>
//   );
// }

function InputComponent(props){
  const [value, setValue] = React.useState("");

  return (
    <div className="w-full flex flex-col gap-2 max-w-[240px] group">
      <Input
      
        label="Roommate Preference"
        classNames={{
          label: [
            "text-white-400 font-normal",
            "text-md pl-0.25",
            "group-focus-within:text-blue-800",
               ],

          input: [
            "text-white-600 text-2xl",
          ],

          inputWrapper: [
            "bg-zinc-900",
            "border-2 border-zinc-500",
            "group",
            "rounded-lg",
            "w-96 lg:w-[32rem] h-20",
            "focus-within:border-blue-800",
            "group",
          ]
        }}
        isDisabled={props.isDisabled}
        placeholder="220001001"
        type="number"
        value={props.value}
        onValueChange={setValue}
        name={props.name}
        onChange={props.onChange}
        // onChange={handleInput}
        // placeholder={props.placeholder}
        // onChange={e=>props.setUsername(e.target.value)}
        // ref={props.refer}
      />
      {/* <p className="text-default-500 text-small">Input value: {value}</p> */}
    </div>
  );

}

export default function Forms() {
 
  // const [username, setUsername] = useState("");
  // const usernameRef=useRef()

  // console.log(username)
  
  // const handleSubmit=(e)=>{
  //   e.preventDefault();
  //   console.log(usernameRef);
  // }

  const [post,setPost]=useState({
    P1:'',
    P2:'',
    P3:'',
    P4:'',
    P5:'',
    P6:''
  })

  // const handleSubmit=(e)=>{
  //   e.preventDefault();
  //   const data=new FormData(e.target)
  //   console.log(Object.fromEntries(data.entries()));
    
  // }
  
  const handleInput=(event)=>{
    setPost({...post,[event.target.name]: event.target.value})

  }

  // const handleSubmit=(event)=>{
  //   event.preventDefault();
  //   axios.post('https://jsonplaceholder.typicode.com/posts',post)
  //   .then(response=> console.log(response))
  //   .catch(err=> console.log(err))
  //   // const data=new FormData(event.target)
  //   // console.log(Object.fromEntries(data.entries()));

  // }
  const handleSubmit = async (event) => { 
    event.preventDefault();
    
    try {
      // const response = await axios.post('https://jsonplaceholder.typicode.com/posts', post); 
      const response = await axios.post('http://localhost:3001/api/submit', post); 
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }
  
  

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavbarComponent />
        <form onSubmit={handleSubmit} className="flex flex-col w-96 lg:w-[32rem] self-center gap-3 mb-20 lg:gap-4">
           <p className="font-bold lg:text-4xl text-3xl m-4 lg:m-6 lg:ml-0 ml-0">
            Your preferences
           </p>
          {/* <InputComponent id="P1" isDisabled={true}>220001001 placeholder="user" </InputComponent> */}
          {/* <InputComponent id="P1"  refer={usernameRef} /> */}
          <InputComponent /*isDisabled*/ value={post.P1} name="P1" id="P1" onChange={handleInput}  />
          <InputComponent name="P2" id="P2" value={post.P2} onChange={handleInput} />
          <InputComponent name="P3" id="P3" value={post.P3} onChange={handleInput} />
          <InputComponent name="P4" id="P4" value={post.P4} onChange={handleInput} />
          <InputComponent name="P5" id="P5" value={post.P5} onChange={handleInput} />
          <InputComponent name="P6" id="P6" value={post.P6} onChange={handleInput}/>
          <Button type="submit" className="rounded-lg h-12 w-32 bg-blue-600 flex flex-row items-center m-0 p-0 gap-1 self-end mt-6">
            <img className="h-7 w-7" src={whiteTick} alt="menu" />
            <p className="text-xl font-bold">Submit</p>
          </Button>
        </form>
        {/* <DevTool control={control}/>    */}
      </div>
      <FooterComponent />
    </>
  );
}