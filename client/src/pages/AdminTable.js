import {React,useState} from "react";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import {Input} from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import { Card, CardHeader, CardBody, Button, Divider } from "@nextui-org/react";
import axios from "axios";
function generateNumberArray(n) {
  const numbers = [];
  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }
  return numbers;
}

// const requiredFloor=5;

// const n = 10; 

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


function TableUI({rows,columns}){
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Access specific query parameters
  const floor = queryParams.get('floor');
  const maxfloor = queryParams.get('maxfloor');

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
        {(column) => <TableColumn key={column.key} className="p-4 text-center text-2xl">{column.label} </TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key} >
            {(columnKey) => <TableCell className="p-4 text-center text-lg">{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>

  
  );
}

export default function AdminTable(props){
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Access specific query parameters
  const floor = queryParams.get('floor');
  const maxfloor = queryParams.get('maxfloor');
  const hostel_id = queryParams.get('hostelID');
  const numberArray = generateNumberArray(maxfloor);


  const [tableData, setTableData] = useState(
    numberArray.map((item) => ({
      key: item,
      SNo: item,
      Name: '',
      Size: '',
    }))
  );

  const handleTableRowChange = (key, fieldName, value) => {
    
      // Check if the entered room name is unique
      const isNameUnique = tableData.every((row) => row.Name !== value);
  
      if (!isNameUnique) {
        // You can provide feedback to the user here, for example:
        alert('Room names must be unique.');
        return;
      }
    
    const updatedTableData = tableData.map((row) => {
      if (row.key === key) {
        return {
          ...row,
          [fieldName]: value,
        };
      }
      return row;
    });
   
    setTableData(updatedTableData);
  };



const rows = numberArray.map((item) => ({
  key: item,
  SNo: item, 
  Name: <Input type="text" label="Name" placeholder="Enter room name"  onChange={(e) => handleTableRowChange(item, 'Name', e.target.value)} classNames={{
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
      "  h-20",
      "focus-within:border-blue-800",
      "group",
    ]
  }} />,
  Size: <Input type="number" label="Size"  placeholder="Enter room size"  onChange={(e) => handleTableRowChange(item, 'Size', e.target.value)}  classNames={{
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
      " h-20",
      "focus-within:border-blue-800",
      "group",
    ]
  }}/>,
}));
const senddata = async () => {
  const isAnyFieldEmpty = tableData.some((row) => row.Name === '' || row.Size === '');

  if (isAnyFieldEmpty) {
    // Provide feedback to the user
    alert('All fields must be filled.');
    return;
  }
  
  const shouldSendData = window.confirm('Do you want to upload all the data about floors?');

  if (shouldSendData) {
    
    console.log('Data sent:', tableData);
    const response=await axios.post('http://localhost:8000/sendData', {floor,hostel_id,tableData});
    console.log(response);
    if (response.data.success) {
     navigate(`/admin2?floor=${floor}&uploadSuccess=true`);

      
      
    }}      
    

  else {
    console.log('Data not sent');
  }
};
 
    return(
    <div>
        <NavbarComponent/> 

        <h1 className="text-center m-12 text-5xl">Enter information for floor {floor}</h1>
        <div className=" w-full sm:w-10/12 md:w-8/12 lg:w-1/2 2xl:w-8/12 mx-auto p-4 m-4 mb-24 mt-12">
        <TableUI rows={rows} columns={columns}/>
        </div>
        <div className="mx-[50%]">
        <Button color="primary" classames="p-24 my-auto" onClick={senddata} >
                          Submit
                        </Button></div>
       
        <FooterComponent/>
        
    </div>
  );
}