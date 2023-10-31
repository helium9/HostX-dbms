import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import {Input} from "@nextui-org/react";

import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";


function generateNumberArray(n) {
  const numbers = [];
  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }
  return numbers;
}

const n = 10; 
const numberArray = generateNumberArray(n);

const rows = numberArray.map((item) => ({
  key: item,
  SNo: item, 
  Name: <Input type="text" label="Name" placeholder="Enter room name" />,
  Size: <Input type="number" label="Size" placeholder="Enter room size" />,
}));

const columns = [
  {
    key: "SNo",
    label: "S.No",
  },
  {
    key: "Name",
    label: "Name",
  },
  {
    key: "Size",
    label: "Size",
  },
];


function TableUI(){

    return(
  //   <Table aria-label="Example static collection table" class="w-8/12 mx-auto p-4 m-4 my-24">
  //   <TableHeader>
  //     <TableColumn class="p-4 text-center">S.NO</TableColumn>
  //     <TableColumn class="p-4 text-center">NAME</TableColumn>
  //     <TableColumn class="p-4 text-center">Size</TableColumn>
  //   </TableHeader>
  //   <TableBody>
    
  //     <TableRow key="1">
  //       <TableCell class="p-4 ">
  //         1
  //       </TableCell>
  //       <TableCell class="p-4">
  //         <Input type="text" label="Name" placeholder="Enter room name" />
  //       </TableCell>
  //       <TableCell class="p-4">
  //         <Input type="number" label="Size" placeholder="Enter room size" />
  //       </TableCell>
  //     </TableRow>
  //   </TableBody>
  // </Table>
  
  <Table aria-label="Example static collection table" >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key} className="p-4 text-center">{column.label} </TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key} >
            {(columnKey) => <TableCell className="p-4 text-center">{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>

  
  );
}

export default function AdminTable(){
    return(
    <div>
        <NavbarComponent/>
        <div className="w-5/6 mx-auto p-4 m-4 mb-24 mt-12">
        <TableUI/>
        </div>
        <FooterComponent/>
    </div>
  );
}