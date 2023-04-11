import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Unallocated from './Unallocated'
import Allocated from './Allocated'
const Employee1 = () => {
  return (
    <>
       <Tabs style={{paddingTop:"5rem"}}>
        <TabList>
            <Tab>Unallocated Tasks</Tab>
            <Tab>Allocated Tasks</Tab>
        </TabList>

        <TabPanels>
            <TabPanel>
             <Unallocated/>
            </TabPanel>
            <TabPanel>
             <Allocated/>
            </TabPanel>
        </TabPanels>
        </Tabs>
    </>
  )
}

export default Employee1
