import NavbarComponent from "../components/NavbarComponent";
import InputComponent from "../components/InputComponent";
import ButtonComponent from "../components/ButtonComponent";
import FooterComponent from "../components/FooterComponent";
export default function Preferences(){
    return(
        
        <div className="grid flex-col">
        <NavbarComponent/>
        <div className="grid mx-64 w-80  md:w-200  justify-self-center " >
        <div className="flex mt-8 md:text-4xl md:mt-16 items-center justify-self-start ">Your Preferences</div>
        
        <div className="flex  flex-col justify-self-start ">
                        <InputComponent />
                        <InputComponent />
                        <InputComponent />
                        <InputComponent />
                        <InputComponent />
                        <InputComponent />
        </div>
        <div className="flex mt-4 items-center justify-self-end ">
        <ButtonComponent />
        </div>
       
        </div>
        <div className="mt-auto">
        <FooterComponent />
        </div>
        </div>
    );
}