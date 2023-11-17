import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import {Input} from "@nextui-org/react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';





const PrefTable = () => {
    const [data, setData] = useState([]);
    const hostelId = "97d72f70-a52e-4902-9ac9-cf20bc397c1d"; // Replace with the actual hostelId
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/preferences/display/${hostelId}`);
        console.log("Data from server:", response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    return (
      <div>
        <NavbarComponent></NavbarComponent>
        <div className="bg-black text-white p-8 m-8 mt-16 mb-16">
          <h1 className="text-2xl mb-4">Data from Preferences Table for Hostel ID: {hostelId}</h1>
          <table className="w-full border-collapse border-t border-b border-white">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="border border-white py-2 px-4 text-lg">Email ID</th>
                <th className="border border-white py-2 px-4 text-lg">Roll Number</th>
                <th className="border border-white py-2 px-4 text-lg">Roommate Roll Number</th>
                <th className="border border-white py-2 px-4 text-lg">Time of Entry</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr className="text-center" key={item.id}>
                  <td className="border border-white py-2 px-4 text-lg">{item.EmailID}</td>
                  <td className="border border-white py-2 px-4 text-lg">{item.RollNumber}</td>
                  <td className="border border-white py-2 px-4 text-lg">{item.RoommateRollNumber}</td>
                  <td className="border border-white py-2 px-4 text-lg">{item.TimeOfEntry}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <FooterComponent></FooterComponent>
      </div>
    );
  };
  
  export default PrefTable;
  
  


