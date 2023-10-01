import React from "react";
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
  ButtonGroup,
  Divider,
} from "@nextui-org/react";
import editPencil from "../images/editPencil.svg";
import blueCross from "../images/blueCross.svg";
import blueEditPencil from "../images/blueEditPencil.svg";
import { useState } from "react";
import AddFilled from "../images/AddFilled.svg";
import releaseForm from "../images/releaseForm.svg";
import expandArrowUp from "../images/expandArrowUp.svg";
import linkLogo from "../images/linkLogo.svg";
import stopForm from "../images/stopForm.svg";
import viewForm from "../images/viewForm.svg";
import whiteEditPencil from "../images/whiteEditPencil.svg";
import Aboutme from "../components/Aboutme.js"
import girl from "../images/girl.jpg" 
export default function AboutPage(){

    return (<>
    <div>
    <NavbarComponent/>
    <div className="mx-24 lg:mx-60 xl:mx-64 grid gap-12 lg:grid-cols-2 xl:grid-cols-3 justify-center">
  <Aboutme name="Ybhinav yangil" imageurl={girl} branch="CSE" />
  <Aboutme name="Ybhinav yangil" imageurl={girl} branch="CSE" />
  <Aboutme name="Ybhinav yangil" imageurl={girl} branch="CSE" />
  <div className="xl:col-start-2"><Aboutme name="Ybhinav yangil" imageurl={girl} branch="CSE" /></div>
</div>

    </div>
    <FooterComponent/>
    </>)
}