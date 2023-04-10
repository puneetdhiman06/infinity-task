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

const Unallocated = () => {
  return (
   <TableContainer>
    <Table variant='simple'>
        <Thead>
        <Tr>
            <Th>Customers Username</Th>
            <Th>Product Type</Th>
            <Th>Issue Type</Th>
            <Th>Date of Submission</Th>
            <Th>More</Th>
        </Tr>
        </Thead>
        <Tbody>
        <Tr>
            <Td>Lalita</Td>
            <Td>Mobile Phone</Td>
            <Td>Broken Screen</Td>
            <Td>13 may 2000</Td>
            <Td>
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
                    {isOpen ? 'More Details Button' : 'More Details Button'}
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => alert('Assigned to employee1 (admin)')}>To yourself (admin)</MenuItem>
                    <MenuItem onClick={() => alert('Assigned to employee2')}>To employee2</MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>

            </Td>
        </Tr>
        </Tbody>
    </Table>
    </TableContainer>
  )
}

export default Unallocated
