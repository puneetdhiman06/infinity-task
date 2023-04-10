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
const Employee2 = () => {
  return (
    <div>
       <h1>My Tasks</h1>
       {/* if assigned task to employee2 .length is === 0 then  "No assigned tasks" 
         else list
       */}
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
            <Tr>
                <Td>Lalita</Td>
                <Td>Mobile Phone</Td>
                <Td>Broken Screen</Td>
                <Td>13 may 2000</Td>
                <Td>Not Completed</Td>
                <Td>
                <Menu>
                  {({ isOpen }) => (
                    <>
                      <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
                        {isOpen ? 'More Details Button' : 'More Details Button'}
                      </MenuButton>
                      <MenuList>
                        <MenuItem onClick={() => alert('task status changed to "In progress"')}>In Progress</MenuItem>
                        <MenuItem onClick={() => alert('task status changed to "On Hold"')}>On Hold</MenuItem>
                        <MenuItem onClick={() => alert('task status changed to "Completed"')}>Completed</MenuItem>
                      </MenuList>
                    </>
                  )}
                </Menu>

                </Td>
            </Tr>
            </Tbody>
        </Table>
        </TableContainer>
    </div>
  )
}

export default Employee2
