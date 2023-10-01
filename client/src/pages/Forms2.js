import NavbarComponent from "../components/NavbarComponent";
import { useState } from 'react';
function InputComponent({id}){
  const [active, setActive] = useState(true);
  let activeAttributes = active?{border: "border-blue-600", textColor: "text-blue-500"}:{border: "border-zinc-500", textColor: "text-white"};
  
  return(
    <div className={`rounded-lg border-2 flex flex-col p-3 pt-1 gap-1 ${activeAttributes.border}`} onFocus={()=>setActive(true)} onBlur={()=>setActive(false)}>
          <label htmlFor={id} className={`${activeAttributes.textColor}`}>Roommate Preference</label>
          <input className="bg-black focus:outline-none text-white text-2xl" type="text" name={id} id={id} />
          </div>
  );
}

export default function Forms2(){
    return(
        <>
        <div className="flex flex-col min-h-screen">
        <NavbarComponent />
        <form className="flex flex-col w-96 lg:w-[32rem] self-center">
          <InputComponent id="P1"/>
        </form>
        </div>
        </>
    );
}