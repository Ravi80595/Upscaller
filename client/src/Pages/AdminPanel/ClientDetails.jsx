import { Tabs, TabList, TabPanels, Tab, TabPanel,Flex,Box,Text,TableContainer, Table, Thead, Tr, Th, Tbody, Td, Button, useToast, Select,} from '@chakra-ui/react'
import React from 'react'



const ClientDetails = ({clientDetail}) => {
console.log(clientDetail,'prr')


return (
<Tabs paddingTop={'20px'}>
      <TabList pb={'20px'}>
        <Tab>Client Details</Tab>
        <Tab>Project Details</Tab>
        <Tab>Tasks Pending</Tab>
        <Tab>Board</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
        <Text fontWeight={'600'} mt={'10px'} mb={'10px'}>{clientDetail.name}</Text>
        </TabPanel>
        <TabPanel>
        <Flex justifyContent={'space-between'}>
          <Text fontWeight={'600'} mt={'10px'} mb={'10px'}>{clientDetail.name}</Text>
          <Button>New Project</Button>
          </Flex>
        </TabPanel>
        <TabPanel>
      
        
        </TabPanel>
        <TabPanel>
        
        </TabPanel>
      </TabPanels>
      </Tabs>
  )
}

export default ClientDetails