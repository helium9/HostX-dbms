import React from "react";
import Footer from '../components/footer'
import NavbarComponent from "../components/NavbarComponent";
import pyramid from "../images/2_3pyramid.svg"
import donut from "../images/5_3donut.svg"
import strip from "../images/18_3strip.svg"
import wave from "../images/Line 1wave.svg"
import slice from "../images/Mask groupwatermelon.svg"
import bgcombine from "../images/Frame 31cb.svg"

export default function LandingPage(){
    return(<div className="grid"><NavbarComponent/>
    <div className="grid self-justify-center ">
        {/* <img src={pyramid}></img>
        <img src={donut}></img>
        <img src={slice}></img>
        <img src={wave}></img>
        <img src={strip}></img> */}
        <img src={bgcombine}></img>

    </div>
    <div className="items-baseline">
    <Footer/>
    </div>
    </div>
    );
}