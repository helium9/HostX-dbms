import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import {Input} from "@nextui-org/react";

import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/react";

function TableUI(){
    return(
    <Table aria-label="Example static collection table" class="w-8/12 mx-auto p-4 m-4 my-24">
    <TableHeader>
      <TableColumn class="p-4 text-center">S.NO</TableColumn>
      <TableColumn class="p-4 text-center">NAME</TableColumn>
      <TableColumn class="p-4 text-center">Size</TableColumn>
    </TableHeader>
    <TableBody>
      <TableRow key="1">
        <TableCell class="p-4 ">
          1
        </TableCell>
        <TableCell class="p-4">
          <Input type="text" label="Name" placeholder="Enter room name" />
        </TableCell>
        <TableCell class="p-4">
          <Input type="number" label="Size" placeholder="Enter room size" />
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
  );
}

export default function AdminTable(){
    return(
    <div>
        <NavbarComponent/>
        <TableUI/>
        <FooterComponent/>
    </div>
  );
}