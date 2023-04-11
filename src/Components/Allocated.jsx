import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
  } from '@chakra-ui/react'

import { ChevronDownIcon } from "@chakra-ui/icons"


const requestData = JSON.parse(localStorage.getItem("requestData"));
console.log(requestData)

const allocatedData = requestData.filter( req=> req.allocated === "unallocated");


const Allocated = () => {
  
  // const [errorMsg,setErrorMsg] = useState(""); 

  let populate = allocatedData.map( req=>{
      return   <Tr key={`${req.name} 12`}>
                  <Td>{req.name}</Td>
                  <Td>{req.productName}</Td>
                  <Td>{req.issues.map( iss=> iss.label+", ")}</Td>
                  <Td>{req.date}</Td>
                  <Td>{req.status}</Td>
                  <Td>
                  <Menu>
                    {({ isOpen }) => (
                      <>
                        <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
                          {isOpen ? 'More Details Button' : 'More Details Button'}
                        </MenuButton>
                        <MenuList>
                          <MenuItem onClick={() => {alert('Assigned to employee1 (admin)')}}>Open</MenuItem>
                        </MenuList>
                      </>
                    )}
                  </Menu>
                  </Td>
              </Tr>
    })

  return (
   <TableContainer>
    <Table variant='simple'>
        <Thead>
        <Tr>
            <Th>Customers Username</Th>
            <Th>Product Type</Th>
            <Th>Issue Type</Th>
            <Th>Date of Submission</Th>
            <Th>Status</Th>
            <Th>More</Th>
        </Tr>
        </Thead>
        <Tbody>
           {populate}
        </Tbody>
    </Table>
    </TableContainer>
  )
}

export default Allocated
