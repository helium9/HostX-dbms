import NavbarComponent from "../components/NavbarComponent";
import InputComponent from "../components/InputComponent";
import ButtonComponent from "../components/ButtonComponent";

export default function Preferences(){
    return(
        <div>
        <NavbarComponent/>
        <div className="mx-auto" >
        <h1 className=" ml-20 text-base mt-8 md:text-4xl md:mt-16 md:ml-60 lg:ml-72 xl:ml-96  ">Your Preferences</h1>
        <div className="md:mt-9 ">
        <div className="flex  flex-col items-center">
                        <InputComponent />
                        <InputComponent />
                        <InputComponent />
                        <InputComponent />
                        <InputComponent />
                        <InputComponent />
        </div>
        </div>
        <ButtonComponent/>
        </div>
        
        </div>
    );
}